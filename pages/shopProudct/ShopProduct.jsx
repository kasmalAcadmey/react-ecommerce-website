import { useEffect, useState } from "react";
import Product from "../../components/product/Product";
import "./shop.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const ShopProduct = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setfilters] = useState({});
  const [filterProdcut, setFilterProduct] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          search && search.length > 2
            ? `http://localhost:8080/api/v1/products?title=${search}`
            : "http://localhost:8080/api/v1/products"
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search]);
  const handleFilter = (e) => {
    setfilters((filter) => {
      return { ...filter, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    console.log(filter);
    setFilterProduct(
      data.filter((item) =>
        Object.entries(filter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [filter, data]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "price") {
      setFilterProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);
  return (
    <div className="shop">
      <div className="shop_container">
        <div className="top_shop">
          <h3>All Proudct</h3>
          <div className="search">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="What are your looking for .."
            />
            <FaSearch
              style={{ fontSize: 20, color: "green", cursor: "pointer" }}
            />
          </div>
        </div>
        <hr className="hr" />

        <div className="bottom_shop">
          <div className="left_shop">
            <h3>Filter by Product: </h3>
            <div className="color">
              <h3>Color: </h3>
              <select onChange={handleFilter} name="color" id="color">
                <option value="white">white</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="black">black</option>
                <option value="green">green</option>
              </select>
            </div>
            <div className="color">
              <h3>Sizes: </h3>
              <select onChange={handleFilter} name="size" id="size">
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
          </div>
          <div className="shop_right">
            <h3>Filter by Newest</h3>
            <select
              onChange={(event) => setSort(event.target.value)}
              name="newest"
              id="newest"
            >
              <option value="price">price (acs)</option>
              <option value="newest">Newest (a, z)</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="hr_l" />
      <div className="newContainer">
        {filterProdcut.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopProduct;

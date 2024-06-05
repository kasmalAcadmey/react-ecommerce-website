import { useEffect, useState } from "react";
import "./single.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addTocart,
  deceraseQuantity,
  increaseQauntity,
} from "../../redux/auth/cartSlice";
const SingleProduct = () => {
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  console.log(id);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const quantity = cart.find((item) => item._id === data._id);
  console.log(quantity?.quantity);
  const [currentImage, setCurrentImage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/v1/products/find/${id}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const item = data;
  const handleCart = () => {
    dispatch(addTocart({ item, quantity: counter }));
  };

  const handelePlus = () => {
    dispatch(increaseQauntity({ item }));
  };
  const handeleMinus = () => {
    dispatch(deceraseQuantity({ item }));
  };
  return (
    <div>
      <div className="single">
        <div className="single-left">
          <div className="image-left">
            {data?.images?.map((item, index) => (
              <img
                onClick={() => setCurrentImage(item)}
                key={index}
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="image-main">
            <img src={currentImage ? currentImage : data?.image} alt="" />
          </div>
        </div>
        <div className="single-right">
          <div className="container-right">
            <h2 className="title-product">T-shrirt</h2>
            <p className="description">{data.description}</p>
            <h1 className="price">${data.price}</h1>
            <div className="colors">
              <span>Color:</span>
              <div className="sub-color">
                {data?.color?.map((item) => (
                  <p key={item._id}>{item}</p>
                ))}
              </div>
            </div>
            <div className="colors">
              <span>Sizes:</span>
              <div className="sub-color">
                {data?.size?.map((item) => (
                  <p key={item._id}>{item}</p>
                ))}
              </div>
            </div>
            <div className="items-right">
              <div onClick={handleCart} className="addtocart">
                Add to cart
              </div>
              <div className="counter">
                <div onClick={handelePlus} className="counter-item">
                  <FaPlus />
                </div>
                <p>{quantity?.quantity ? quantity?.quantity : "0"}</p>
                <div onClick={handeleMinus} className="counter-item">
                  <FaMinus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

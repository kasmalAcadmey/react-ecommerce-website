import { useEffect, useState } from "react";
import BottomSlider from "../../components/bottomSlider/BottomSlider";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import Slider from "../../components/slider/Slider";
import axios from "axios";
import "./homescree.css";
import Deals from "../../components/Deals/Deals";
const HomeScreen = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/products?new=true"
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <Slider />
        <Deals />
        <div className="new">
          <span className="newText">New Collections</span>
          <div className="newContainer">
            {data.map((item) => (
              <Product key={item._id} item={item} />
            ))}
          </div>
        </div>
        <BottomSlider />
      </div>
    </div>
  );
};

export default HomeScreen;

import { useEffect, useState } from "react";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCurrentSlide(currentSlide >= 3 ? 0 : currentSlide + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [currentSlide]);
  return (
    <div className="slider">
      <div className="left_slider">
        <h2 className="title">
          Order <br /> Product Now
        </h2>
        <p className="sub_description">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio maxime
          quam nobis similique voluptate aliquid, dicta iusto quidem est dolor
          accusantium fugit ex dolores eligendi veritatis consequuntur aperiam
          laborum deleniti
        </p>
      </div>
      <div className="images">
        {currentSlide === 0 && (
          <img
            style={{ transition: "all ease 1.5" }}
            src="../../assets/Untitled design (36).png"
            className="slider_image"
          />
        )}
        {currentSlide === 1 && (
          <img
            style={{ transition: "all ease 1.5s" }}
            src="../../assets/summer-P2X5LJJ-970x660.jpg"
            className="slider_image"
          />
        )}
        {currentSlide === 2 && (
          <img
            style={{ transition: "all ease 1.5s" }}
            src="../../assets/homev2-new-arrivals.webp"
            className="slider_image"
          />
        )}
        {currentSlide === 3 && (
          <img
            style={{ transition: "all ease 1.5s" }}
            src="../../assets/Home Banner.png"
            className="slider_image"
          />
        )}
      </div>
    </div>
  );
};

export default Slider;

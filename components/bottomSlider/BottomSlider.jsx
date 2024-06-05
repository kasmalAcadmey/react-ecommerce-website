import "./bottomslide.css";

const BottomSlider = () => {
  return (
    <div className="bottom">
      <div className="left_bottom">
        <img
          src="../../assets/Untitled design (5).png"
          alt=""
          className="mobile_frame"
        />
      </div>
      <div className="right_bottom">
        <span className="bottomTitle">
          A Fastesd Secure way on Buy New Product{" "}
        </span>
        <p className="description_bottom">
          Download our app for free to by new Product with in the minuts over
          104 and other contires{" "}
        </p>
        <div className="images_botom">
          <img
            src="../../appstore.svg"
            style={{ cursor: "pointer" }}
            width={100}
            height={100}
            alt=""
          />
          <img
            style={{ cursor: "pointer" }}
            src="../../googleplay.svg"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSlider;

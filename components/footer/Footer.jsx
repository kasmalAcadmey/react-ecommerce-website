import { AiFillFire } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top_footer">
        <div className="new_left">
          <p className="new_title"> Subscribe For New Latter </p>
          <span className="new_description">
            Lorem ipsum dolor sit, amet consectetur adipisicing eli.
          </span>
        </div>
        <div className="new_right">
          <input type="text" placeholder="Your Email Address" />
          <div className="sub">Subscribe</div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="contect_bottom">
          <div className="logo">
            <AiFillFire style={{ color: "green", fontSize: 33 }} />
            KasmalShop
          </div>
          <h3>Contect Us</h3>
          <div className="item_bottom">
            <span>Address: </span>
            <p>28p2+h1, Digfeer Rd , Mogadisho, somalia</p>
          </div>
          <div className="item_bottom">
            <span>Hours: </span>
            <p>7/24 hours open</p>
          </div>
          <div className="item_bottom">
            <span>Address: </span>
            <p>+252 61 5328654, +252 61 5328654</p>
          </div>
        </div>
        <div className="about_bottom">
          <h3>About Us</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Deivlery iformation</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="about_bottom">
          <h3>My Accont </h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Deivlery iformation</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="install_app">
          <h3>Install App</h3>
          <p>From App Store or Google play Store</p>
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
          <p style={{ margin: 0, marginBottom: 5 }}>Secure Pyament Getways </p>
          <img
            src="../../assets/Safecheckout.png"
            width={250}
            height={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

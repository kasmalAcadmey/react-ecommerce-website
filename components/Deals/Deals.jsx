import "./deals.css";
import { FaShoppingCart } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

const Deals = () => {
  return (
    <div className="deals-contianer">
      <div className="delivery">
        <div>
          <FaShoppingCart className="free" />
          <span className="delivery-text">Free Delivery</span>
        </div>
        <p>
          Constorcutro Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="delivery">
        <div>
          <LiaCertificateSolid className="free" />
          <span className="delivery-text">Quality Guarantee</span>
        </div>
        <p>
          Constorcutro Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="delivery">
        <div>
          <MdOutlineLocalOffer className="free" />
          <span className="delivery-text">Daily Offers</span>
        </div>
        <p>
          Constorcutro Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="delivery">
        <div>
          <MdSecurity className="free" />
          <span className="delivery-text">100% Secure Payment</span>
        </div>
        <p>
          Constorcutro Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Deals;

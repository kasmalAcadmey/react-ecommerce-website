import { useSelector } from "react-redux";
import "./order.css";
import { useNavigate } from "react-router-dom";
const OrderPage = ({ setCurrentAuth }) => {
  const { cart } = useSelector((state) => state.cart);

  const Navigation = useNavigate();
  const hanleCheckout = () => {
    Navigation("/checkout");
    setCurrentAuth(false);
  };
  return (
    <div className="order">
      <div className="cart-sub">
        {cart.map((item) => (
          <div className="cart-items" key={item._id}>
            <div className="container-cart">
              <h4 className="title-cart">{item.title}</h4>
              <img src={item.image} alt="" className="cart-image" />
              <p className="cart-quanitiy">{item.quanitty}</p>
              {/* <p className="cart-price">{item.price}</p> */}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 16,
                padding: 20,
                maxWidth: 800,
              }}
            >
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium nemo delectus perspiciatis. Maxime dolorum
                explicabo, consectetur animi nihil nam deserunt.
              </span>
            </div>
            <div className="total-container">
              <div onClick={{}}>
                <div className="counter">${item.quantity * item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;

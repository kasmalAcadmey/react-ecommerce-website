import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { deleteCart } from "../../redux/auth/cartSlice";
import { useNavigate } from "react-router-dom";
const CartScreen = ({ setCurrentAuth }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDlete = (item) => {
    dispatch(deleteCart({ item }));
  };
  const Navigation = useNavigate();
  const hanleCheckout = () => {
    Navigation("/checkout");
    setCurrentAuth(false);
  };
  return (
    <div className="cart">
      <div className="cart-sub">
        {cart.map((item) => (
          <div className="cart-items" key={item._id}>
            <div className="container-cart">
              <h4 className="title-cart">{item.title}</h4>
              <img src={item.image} alt="" className="cart-image" />
              <p className="cart-quanitiy">{item.quanitty}</p>
              <p className="cart-price">${item.price}</p>
            </div>
            <div className="total-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 16,
                }}
              >
                <span>SubTotal:</span>
                <span>${item.quantity * item.price}</span>
              </div>
              <div onClick={() => handleDlete(item)}>
                <div className="counter">Delete</div>
              </div>
            </div>
          </div>
        ))}
        <div onClick={hanleCheckout} className="checkout">
          <span>Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;

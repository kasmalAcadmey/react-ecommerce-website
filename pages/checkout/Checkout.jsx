import { useState } from "react";
import "./checkout.css";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/auth/cartSlice";
const Checkout = () => {
  const [checkout, setCheckout] = useState("");
  const { cart } = useSelector((state) => state.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  const pkStripe = loadStripe(
    "pk_test_51PKF11Rp8XhOLG2xR56AiRqyjlcWPQD0MiH5PLiWzYVfrYX8wcvSPA0zJO1q6sOPEgPtg4GP0mlZHXLxlGTkgQgr00FrdAk1U7"
  );
  const dispatch = useDispatch();
  const handlePayment = async (e) => {
    const stripe = await pkStripe;
    e.preventDefault();
    if (checkout === "stripe") {
      dispatch(clearCart());
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/payment/intent",
          {
            prodcuts: cart,
          }
        );

        const { id } = res.data;
        const result = await stripe.redirectToCheckout({
          sessionId: id,
        });

        if (result.error) {
          console.log(result.error);
        }

        // if()
        dispatch(clearCart());
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("hormmud");
    }
  };
  return (
    <form onSubmit={handlePayment} className="checkout-page">
      <div className="left-checkout">
        <h2 className="title-checkout">Billing & Shipping</h2>
        <hr />
        <div className="checkout-items">
          <p className="lable">Full Name</p>
          <input required type="text" placeholder="your full name" />
        </div>
        <div className="checkout-items">
          <p className="lable">Country </p>
          <input required type="text" placeholder="country name" />
        </div>
        <div className="checkout-items">
          <p className="lable">District</p>
          <input required type="text" placeholder="District" />
        </div>
        <div className="checkout-items">
          <p className="lable">City</p>
          <input required type="text" placeholder="city" />
        </div>
        <div className="checkout-items">
          <p className="lable">Phone Number</p>
          <input required type="text" placeholder="your full name" />
        </div>
        <div className="checkout-items">
          <p className="lable">Email</p>
          <input required type="text" placeholder="your full name" />
        </div>
      </div>
      <div className="right-checkout">
        <div className="container">
          <h2 className="title-choeckout">YOUR ORDERS</h2>
          <hr />
          {cart.map((item) => (
            <div key={item._id} className="billing">
              <div>
                <p>{item.title}</p>
              </div>
              <p className="price">${item.price}</p>
            </div>
          ))}

          <hr />
          <div className="item">
            <p>SubTotal: </p>
            <p>${total}</p>
          </div>
          <div className="item">
            <p>Shipping: </p>
            <p>$ 2 Delivery</p>
          </div>
          <div className="total">
            <p>TOTAL:</p>
            <p>${total + 2}.00</p>
          </div>
          <hr />
          <div className="payment">
            <p>PAYMENTS:</p>
            <p>Edahab , Evc Plus ZAAD MERCHENT</p>
          </div>
          <div className="payment-checkout">
            <div onClick={() => setCheckout("stripe")}>
              {checkout && checkout === "stripe" ? (
                <FaCircle className="icon" />
              ) : (
                <FaRegCircle className="icon" />
              )}
              <span>Stripe</span>
            </div>
            <p>Stripe Pyament / MasterCard / vis Card</p>
          </div>
          <div className="payment-checkout">
            <div onClick={() => setCheckout("evc")}>
              {checkout && checkout === "evc" ? (
                <FaCircle className="icon" />
              ) : (
                <FaRegCircle className="icon" />
              )}
              <span>Hormuud</span>
            </div>
            <p>+252 61 5328654, 016137272</p>
          </div>

          <button type="submit" className="place-order">
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;

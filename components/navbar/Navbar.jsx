import "./navbar.css";
import { AiFillFire } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartScreen from "../../pages/cart/CartScreen";
import { LogoutUser } from "../../redux/auth/userSlice";

const Navbar = ({ setCurrentAuth }) => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [carts, setCarts] = useState(false);
  const handleCart = () => {
    setCarts(!carts);
  };

  return (
    <>
      <div className="navbar">
        <nav className="nav">
          <Link to={"/"} className="link">
            <div className="logo">
              <AiFillFire style={{ color: "green", fontSize: 33 }} />
              KasmalShop
            </div>
          </Link>
          <div style={{ cursor: "pointer" }} className="menu">
            <Link className="link" to={"/"}>
              <div className="item">Home</div>
            </Link>
            <Link to={"/shop"} className="link">
              <div className="item">Shop</div>
            </Link>
            {user ? (
              <Link to={"/orders"} className="item link">
                Orders
              </Link>
            ) : null}

            {user ? (
              <div
                onClick={() => {
                  dispatch(LogoutUser());
                }}
                className="avator"
              >
                {user?.avator ? (
                  user?.avator
                ) : (
                  <img
                    src="https://cdn-icons-png.freepik.com/512/6596/6596121.png"
                    className="avator-image"
                  />
                )}
              </div>
            ) : (
              <>
                <div
                  onClick={() => setCurrentAuth("login")}
                  className="auth-login"
                >
                  Login
                </div>
                <div
                  onClick={() => setCurrentAuth("register")}
                  className="auth-register"
                >
                  Register
                </div>
              </>
            )}
            <div onClick={handleCart} className="cart-icon">
              <div className="cart-number">{cart?.length}</div>
              <LuShoppingCart />
            </div>
          </div>
          {/* only for mobile */}
          <div className="only_mobile">
            <Link to={"/shop"} className="link link_shop">
              <div className="item">Shop</div>
            </Link>
            <div className="avator">
              {user?.avator ? (
                user?.avator
              ) : (
                <img
                  src="https://cdn-icons-png.freepik.com/512/6596/6596121.png"
                  className="avator-image"
                />
              )}
            </div>
            <div onClick={handleCart} className="cart-icon">
              <div className="cart-number">{cart?.length}</div>
              <LuShoppingCart />
            </div>
          </div>
        </nav>
      </div>

      {cart.length > 0 && carts && (
        <CartScreen setCurrentAuth={setCurrentAuth} />
      )}
    </>
  );
};

export default Navbar;

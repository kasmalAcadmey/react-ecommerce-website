import axios from "axios";
import "./authantication.css";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccuss } from "../../redux/auth/userSlice";

import toast from "react-hot-toast";

const Authantication = ({ currentAuth, setCurrentAuth }) => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handlechange = (e) => {
    setAuth((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  const dispatch = useDispatch();

  const handlelogin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        currentAuth === "login"
          ? "http://localhost:8080/api/v1/auth/login"
          : "http://localhost:8080/api/v1/auth/register",
        auth
      );
      console.log(res.data);
      dispatch(loginSuccuss(res.data));
      toast.success(res?.data?.message);
      setCurrentAuth("");
    } catch (err) {
      console.log(err);
      toast.error(
        err?.response?.data || "somthing went wrong with the invalidion"
      );
    }
  };
  return (
    <div className="auth">
      <form action="">
        <div className="auth-title">
          <h2>{currentAuth === "login" ? "Login" : "Register"}</h2>
          <IoMdClose onClick={() => setCurrentAuth("")} className="icon" />
        </div>
        <div className="auth-inputs">
          <input
            type="email"
            id="email"
            value={auth.email}
            onChange={(e) => handlechange(e)}
            placeholder="Enter your Email"
            required
          />
          {currentAuth === "register" && (
            <input
              type="text"
              placeholder="Enter your UserName"
              id="name"
              value={auth.name}
              onChange={(e) => handlechange(e)}
              required
            />
          )}
          <input
            type="password"
            id="password"
            value={auth.password}
            onChange={(e) => handlechange(e)}
            placeholder="Enter your Password"
            required
          />
        </div>
        <button onClick={handlelogin}>
          {currentAuth === "login" ? "Login" : "Register"}
        </button>
        <p className="account">
          {currentAuth === "login"
            ? "i dont't have an Accnount"
            : "i have already account"}
          {currentAuth === "login" ? (
            <p
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => setCurrentAuth("register")}
            >
              Click here
            </p>
          ) : (
            <p
              style={{ color: "green", cursor: "pointer" }}
              onClick={() => setCurrentAuth("login")}
            >
              Click here
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Authantication;

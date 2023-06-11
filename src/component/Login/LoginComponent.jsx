import React, { useState } from "react";
import "./LoginComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducer/useSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginComponent = () => {
  const [getform, setgetform] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlegetform = (e) => {
    setgetform({ ...getform, [e.target.name]: e.target.value });
  };

  const returnHome = () => {
    const useradmin = JSON.parse(localStorage.getItem("user"));
    if (useradmin.email == "admin@gmail.com") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(login(getform)).unwrap();
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(returnHome, 3000);
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="logincomponent">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="logincomponent1">
        <div className="loginimg">
          <img src="./img/LOGO5.jpg" />
        </div>
        <form className="loginform" onSubmit={handleSubmit}>
          <label htmlFor="">EMAIL</label>
          <br />
          <input type="text" name="email" onChange={handlegetform} />
          <br />
          <label htmlFor="">PASSWORD</label>
          <br />
          <input type="password" name="password" onChange={handlegetform} />
          <br />
          <div className="btnlogin">
            <button type="submit">LOGIN</button>
          </div>
          <Link to={"/register"}>Go to Register</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

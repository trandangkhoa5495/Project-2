import React, { useState } from "react";
import "./RegisterComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/reducer/useSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterComponen = () => {
  //goi dispatch, action register
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //tao mot object chua thong email password tu form
  const [getform, setgetform] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    phoneNumber: "",
    role: 1,
  });
  //khi form submit minh di= spatch action

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorRePass, setErrorRePass] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  const handlegetform = (e) => {
    setgetform({ ...getform, [e.target.name]: e.target.value });
  };

  // chuyển hướng đăng nhập thành công
  const returnHome = () => {
    navigate("/Login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      getform.email == "" ||
      getform.password == "" ||
      getform.repeatPassword !== getform.password ||
      getform.phoneNumber == "" ||
      getform.repeatPassword == ""
    ) {
      if (getform.email == "") {
        setErrorEmail("Email không được để trống");
      }
      if (getform.password == "") {
        setErrorPass("Mật khẩu không được để trống");
      }
      if (getform.repeatPassword == "") {
        setErrorRePass("Mật khẩu không được để trống");
      }
      if (getform.repeatPassword !== getform.password) {
        setErrorRePass("Mật khẩu không trùng ");
      }
      if (getform.phoneNumber == "") {
        setErrorNumber("số phone không được để trống");
      }
    } else {
      try {
        const data = await dispatch(register(getform)).unwrap();
        toast.success("Logged in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        data && setTimeout(returnHome, 3000);
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="registercomponent">
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
      <div className="registercomponent1">
        <div className="registerimg">
          <img src="./img/LOGO5.jpg" />
        </div>
        <form className="registerform" onSubmit={handleSubmit}>
          <label htmlFor="">EMAIL</label>
          <br />
          <input
            value={getform.email}
            type="text"
            name="email"
            onChange={handlegetform}
          />
          <span>{errorEmail}</span>
          <br />
          <label htmlFor="">PASSWORD</label>
          <br />
          <input
            value={getform.password}
            type="password"
            name="password"
            onChange={handlegetform}
          />
          <span>{errorPass}</span>
          <br />
          <label htmlFor="">REPEAT PASSWORD</label>

          <br />
          <input
            value={getform.repeatPassword}
            type="password"
            name="repeatPassword"
            onChange={handlegetform}
          />
          <span>{errorRePass}</span>
          <br />
          <label htmlFor="">PHONE NUMBER</label>
          <br />
          <input
            value={getform.phoneNumber}
            type="text"
            name="phoneNumber"
            onChange={handlegetform}
          />
          <span>{errorNumber}</span>
          <br />
          <div className="btnregister">
            <button type="submit">REGISTER</button>
          </div>
          <Link to={"/"}>Go to Home</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponen;

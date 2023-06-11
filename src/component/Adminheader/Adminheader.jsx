import React from "react";
import "./Adminheader.css";
import { Link, useNavigate } from "react-router-dom";
const Adminheader = () => {
  const navigate = useNavigate();
  const handlelogoutadmin = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accesstoken");

    navigate("/");
  };
  return (
    <div className="admincomponent">
      <div className="navcomponent">
        <img src={process.env.PUBLIC_URL + "img/LOGO5.jpg"} />
        <button id="logout" onClick={() => handlelogoutadmin()}>
          LOG OUT
        </button>
      </div>

      <div className="linecolor"></div>

      <div className="manageproduct">
        <Link to={"/admin/adminuser"}>USER MANAGER</Link>
        <Link to={"/admin/productmanager"}>PRODUCT MANAGER</Link>
      </div>
      {/* <div className="addProductadmin">
        <button id="addProductadmin"></button>
      </div> */}
    </div>
  );
};

export default Adminheader;

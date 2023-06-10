import React from "react";
import "./Adminheader.css";
import { Link } from "react-router-dom";
const Adminheader = () => {
  return (
    <div className="admincomponent">
      <div className="navcomponent">
        <img src={process.env.PUBLIC_URL + "img/LOGO5.jpg"} />
      </div>

      <div className="linecolor"></div>

      <div className="manageproduct">
        <Link to={"/admin/adminuser"}>USER MANAGER</Link>
        <Link to={"/admin/productmanager"}>PRODUCT MANAGER</Link>
      </div>
    </div>
  );
};

export default Adminheader;

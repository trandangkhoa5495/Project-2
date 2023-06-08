import React from "react";
import "./Cardproduct.css";
import { Link } from "react-router-dom";
const Cardproduct = () => {
  return (
    <>
      <div className="totalcardproduct">
        <div className="cardproductimg">
          <img src="./img/LEXUS-LX-570-1.jpeg" />
        </div>
        <div className="cardproductcontent">
          <p>Name: Volvo S60</p>
          <p>Price: 1.200.000.000</p>
          <p>
            <img src="./img/calendar.png" />
            2021
          </p>
          <p>
            <img src="./img/kilometer.png" />
            12.000 Km
          </p>
        </div>
        <Link to={"/details"}>DETAIL</Link>
      </div>
    </>
  );
};

export default Cardproduct;

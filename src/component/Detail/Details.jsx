import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <div className="detailscomponent">
      <div className="detailscomponentparent1">
        <p>DETAILS</p>
        <div className="detailscomponentparent">
          <div className="detailscomponentimg">
            <img src="./img/MEC-GLS450-2021.jpeg" />
          </div>
          <div className="detailscomponentcontent">
            <p>Name: Mecerdes</p>
            <p>Model: c200</p>
            <p>Year of manufacture: 2012</p>
            <p>Price: 1.200.000.000 VND</p>
            <div className="addtocard1">
              <div>
                <button className="btnaddtocard">
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#ef4136" }}
                  />
                </button>
              </div>
              <div className="detailscomponentcheckcard">
                <Link to={"/shoppingcart"}>CHECK CARDS</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React from "react";
import "./Lishconsignment.css";
import { NavLink } from "react-router-dom";
const Lishconsignment = (props) => {
  const datanew = props.data;

  return (
    <>
      {datanew.map((product) => (
        <div className="totalcardproduct">
          <div className="cardproductimg">
            <img src={product.img} />
          </div>
          <div className="cardproductcontent">
            <p>Name: {product.name}</p>
            <p>Price: {product.price.toLocaleString("en-GB")}</p>
            <p>
              <img src="./img/calendar.png" />
              {product.year}
            </p>
            <p>
              <img src="./img/kilometer.png" />
              {product.km} Km
            </p>
          </div>
          <NavLink to={`/details/${product.id}`}>DETAIL</NavLink>
        </div>
      ))}
    </>
  );
};

export default Lishconsignment;

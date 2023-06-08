import React from "react";
import "./Cardproduct.css";
import { Link, NavLink } from "react-router-dom";
const Cardproduct = (props) => {
  const data = props.product;
  return (
    <>
      {data.map((product) => (
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

export default Cardproduct;

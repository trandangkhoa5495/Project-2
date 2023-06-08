import React from "react";
import "./Lishproduct.css";
import Cardproduct from "../Cardproduct/Cardproduct";
import { useSelector } from "react-redux";

const Lishproduct = () => {
  const productData = useSelector((state) => state.product);

  return (
    <div className="lishproduct">
      <Cardproduct product={productData} />
    </div>
  );
};

export default Lishproduct;

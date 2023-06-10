import React from "react";
import "./Lishproduct.css";
import Cardproduct from "../Cardproduct/Cardproduct";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Lishproduct = () => {
  const productData = useSelector((state) => state.product);
  const { state } = useLocation();

  //filter thang productData
  const data = productData.filter((product) => product.model == state?.data);

  return (
    <div className="lishproduct">
      <Cardproduct product={data.length !== 0 ? data : productData} />
    </div>
  );
};

export default Lishproduct;

import React from "react";
import "./Carforsale.css";
import Common from "../Common/Common";
import Lishcarforsale from "../Lishcarforsale/Lishcarforsale";
import { useSelector } from "react-redux";
const Carforsale = () => {
  const carforsale = useSelector((state) => state.product);
  const datanew = carforsale.filter((product) => product.status === "new");
  return (
    <div className="lishproduct1 ">
      <Lishcarforsale datanew={datanew} />
      <Common />
    </div>
  );
};

export default Carforsale;

import React from "react";
import "./Consignment.css";
import Common from "../Common/Common";
import Lishconsignment from "../Lishconsingment/Lishconsignment";
import { useSelector } from "react-redux";
const Consignment = () => {
  const consignment = useSelector((state) => state.product);
  const dataconsign = consignment.filter(
    (item) => item.status == "consignment"
  );
  return (
    <div className="lishproduct2">
      <Lishconsignment data={dataconsign} />
      <Common />
    </div>
  );
};

export default Consignment;

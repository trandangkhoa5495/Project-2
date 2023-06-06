import React from "react";
import HeaderComponen from "../../component/Header/HeaderComponen";
import FoorterComponent from "../../component/Footer/FoorterComponent";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <HeaderComponen />
      <Outlet />
      <FoorterComponent />
    </div>
  );
};

export default HomePage;

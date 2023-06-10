import React from "react";
import "./AdminPage.css";
import Adminheader from "../../component/Adminheader/Adminheader";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="adminbackgroud ">
      <Adminheader />
      <Outlet />
    </div>
  );
};

export default AdminPage;

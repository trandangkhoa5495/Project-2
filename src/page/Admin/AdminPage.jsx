import React, { useEffect } from "react";
import "./AdminPage.css";
import Adminheader from "../../component/Adminheader/Adminheader";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleGetAllUsers } from "../../redux/reducer/UserAdminSlice";
import { handleCallAPIAdminproduct } from "../../redux/reducer/ProductAdminSlice";

const AdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleGetAllUserAPI = async () => {
      await dispatch(handleGetAllUsers()).unwrap();
    };
    handleGetAllUserAPI();
  }, []);
  useEffect(() => {
    const handleGetAllProductAPI = async () => {
      await dispatch(handleCallAPIAdminproduct()).unwrap();
    };
    handleGetAllProductAPI();
  }, []);
  return (
    <div className="adminbackgroud ">
      <Adminheader />
      <Outlet />
    </div>
  );
};

export default AdminPage;

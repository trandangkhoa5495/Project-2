import React, { useEffect, useState } from "react";
import "./Adminuser.css";
import { useDispatch, useSelector } from "react-redux";
import { Handledeleteuser } from "../../redux/reducer/UserAdminSlice";

const Adminuser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userAdminSlice);
  // const handleActive = async (dt) => {
  //   console.log(dt);
  //   const newPayLoad = { ...dt, role: 1 };
  //   await dispatch(handleUpdatUser(newPayLoad)).unwrap();
  // };

  // const handleDisable = async (dt) => {
  //   const newPayLoad = { ...dt, role: 0 };
  //   await dispatch(handleUpdatUser(newPayLoad)).unwrap();
  // };

  const handledeleteuser = async (id) => {
    await dispatch(Handledeleteuser(id)).unwrap();
  };

  return (
    <div className="adminuser">
      <table className="tableuser">
        <tr>
          <th>NO</th>
          <th>EMAIL</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
        {data &&
          data.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.email}</td>
              <td>
                <button id="btnactiveuser">ACTIVE</button>
              </td>
              <td>
                <button
                  id="btnunactive"
                  onClick={() => handledeleteuser(item.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Adminuser;

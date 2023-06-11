import React, { useEffect, useState } from "react";
import "./Adminproduct.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteproduct,
  handledeleteAPI,
} from "../../redux/reducer/ProductAdminSlice";
const Adminproduct = () => {
  const dispatch = useDispatch();
  const lishProduct = useSelector((state) => state.productadminslice);

  const handledelete = async (id) => {
    await dispatch(handledeleteAPI(id)).unwrap();
  };

  return (
    <div className="adminuser">
      <table className="tableuser">
        <tr>
          <th>NO</th>
          <th>IMAGE</th>
          <th>NAME PRODUCT</th>

          <th>PRICE</th>
          <th>ACTION</th>
        </tr>
        {lishProduct.map((product, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img id="imgavatar" src={product.img} />
            </td>
            <td>{product.name}</td>

            <td>{product.price.toLocaleString("en-GB")}</td>
            <td>
              <button id="btnactive">EDIT</button>
              <button id="btnunactive" onClick={() => handledelete(product.id)}>
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Adminproduct;

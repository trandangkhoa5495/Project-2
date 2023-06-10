import React from "react";
import "./Adminproduct.css";
const Adminproduct = () => {
  return (
    <div className="adminuser">
      <table className="tableuser">
        <tr>
          <th>NO</th>
          <th>IMAGE</th>
          <th>NAME PRODUCT</th>
          <th>DETAIL</th>
          <th>PRICE</th>
          <th>ACTION</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <img
              id="imgavatar"
              src="https://thegioixeluot.com.vn/wp-content/uploads/2022/04/BMW-420i-Gran-Coupe-H-Auto-Chuyen-BMW-Cu-Luot-da-qua-su-dung-1-1.jpg"
            />
          </td>
          <td>VOLVO</td>
          <td>
            <button id="detailscomponent">DETAIL</button>
          </td>
          <td>1.200.000.000</td>
          <td>
            <button id="btnactive">EDIT</button>
            <button id="btnunactive">DELETE</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Adminproduct;

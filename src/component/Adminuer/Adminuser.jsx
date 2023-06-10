import React from "react";
import "./Adminuser.css";

const Adminuser = () => {
  return (
    <div className="adminuser">
      <table className="tableuser">
        <tr>
          <th>NO</th>
          <th>EMAIL</th>
          <th>ACTION</th>
        </tr>
        <tr>
          <td>1</td>
          <td>trandangkhoa@gmail.com</td>
          <td>
            <button id="btnactive">ACTIVE</button>
            <button id="btnunactive">DISABLE</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Adminuser;

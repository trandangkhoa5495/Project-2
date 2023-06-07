import React from "react";
import "./Sellcar.css";
import Common from "../Common/Common";
const Sellcar = () => {
  return (
    <div className="sellcar">
      <div className="sellcarimg">
        <div className="forminformation">
          <p>YOUR INFORMATION</p>
          <p>
            Please leave your information for our experts to contact and help
            you determine the best price for your car.
          </p>
          <form className="forminformation1">
            <input type="text" name="fullname" placeholder="Full Name" />
            <br />
            <input type="text" name="phonenumber" placeholder="Phone Number" />
            <br />
            <input type="text" name="email" placeholder="Email" />
            <br />
            <textarea
              placeholder="Your Information"
              name="information"
            ></textarea>

            <div className="btnsend">
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>

      <Common />
    </div>
  );
};

export default Sellcar;

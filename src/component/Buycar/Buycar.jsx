import React from "react";
import "./Buycar.css";
import Common from "../Common/Common";
const Buycar = () => {
  return (
    <div className="buycar">
      <div className="buycarimg">
        <div className="buyforminformation">
          <p>VALUING YOUR CAR</p>
          <p>
            Please enter the information below, H Auto will help you evaluate
            the car. Please enter correct information about your vehicle.
          </p>
          <form className="buyforminformation1">
            <input type="text" name="model" placeholder="Model" />
            <br />
            <input type="text" name="namecar" placeholder="Name Your Car" />
            <br />
            <input type="text" name="version" placeholder="Vesion" />
            <br />
            <input
              type="text"
              name="year_of_production"
              placeholder="Year Of Production"
            />
            <br />
            <input type="text" name="km" placeholder="km Traveled" />
            <br />
            <input type="text" name="price" placeholder="Suggested Price" />
            <br />
            <input type="text" name="fullname" placeholder="Full Name" />
            <br />
            <input type="text" name="phone" placeholder="Phone Number" />
            <br />
            <div className="btnsendbuy">
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>

      <Common />
    </div>
  );
};

export default Buycar;

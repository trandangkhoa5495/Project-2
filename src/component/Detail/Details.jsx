import React, { useEffect, useState } from "react";
import "./Details.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/reducer/CardSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const paramsId = useParams();
  const productList = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dataMain = productList.find(
    (product) => product.id === Number(paramsId.id)
  );

  const dispatch = useDispatch();

  const handleaddproduct = (dataMain) => {
    if (!user) {
      toast.warning("Please login to purchase", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      dispatch(addCard(dataMain));
      toast.success("successful purchase", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="detailscomponent">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="detailscomponentparent1">
        <p>DETAILS</p>
        <div className="detailscomponentparent">
          <div className="detailscomponentimg">
            <img src={dataMain?.image} />
          </div>
          <div className="detailscomponentcontent">
            <p>Name: {dataMain.name}</p>
            <p>Engine: {dataMain.engine}</p>
            <p>Maximum power: {dataMain.maximumpower} hp</p>
            <p>Engine capacity: {dataMain.Enginecapacity} cc</p>
            <p>Acceleration(0-100km/h):{dataMain.Acceleration} s</p>
            <p>Max speed:{dataMain.Maxspeed} km/h</p>
            <p>Fuel consumption: {dataMain.Fuelconsumption}l /100km</p>
            <p>Price: {dataMain.price.toLocaleString("en-GB")}</p>
            <div className="addtocard1">
              <div>
                <button
                  className="btnaddtocard"
                  onClick={() => handleaddproduct(dataMain)}
                >
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#ef4136" }}
                  />
                </button>
              </div>
              <div className="detailscomponentcheckcard">
                <Link to={"/shoppingcart"}>CHECK CARDS</Link>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default Details;

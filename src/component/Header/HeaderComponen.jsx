import React, { useState } from "react";
import "./HeaderComponen.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducer/useSlice";

const HeaderComponen = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handlelogout = () => {
    localStorage.clear();
    setUser(undefined);
  };

  return (
    <>
      <div className="navcomponent">
        <img src="./img/LOGO5.jpg" />

        <div className="navchoose">
          <ul>
            <li>
              <Link to={"/"}>HOME PAGE</Link>
            </li>
            <li>
              <Link to={"/introduce"}>INTRODUCE</Link>
            </li>
            <li>
              <Link to={"/onsale"}>CAR FOR SALE</Link>
            </li>
            <li>
              <Link to={"/deposit"}>CONSIGNMENT CAR</Link>
            </li>
            <li>
              <Link to={"/sellcar"}>SELL CAR</Link>
            </li>
            <li>
              <Link to={"/changecar"}>BUY CAR</Link>
            </li>
          </ul>
        </div>
        <div className="navchoose">
          <ul>
            {user ? (
              <>
                <li>
                  <img id="logoutimg" src="./img/LOGO6.jpg" />
                </li>
                <li>
                  <button id="logout" onClick={() => handlelogout()}>
                    LOG OUT
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/Login"}>LOG IN</Link>
                </li>
                <li>
                  <Link to={"/register"}>REGISTER</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="linecolor"></div>

      <div className="choosecar">
        <button id="btnchoosecar">
          <img src="./img/LOGOAUDI.png" />
          AUDI
        </button>
        <button id="btnchoosecar">
          <img src="./img/LOGOBMW.png" />
          BMW
        </button>
        <button id="btnchoosecar">
          <img src="./img/LOGOLEXUS.png" />
          LEXUS
        </button>
        <button id="btnchoosecar">
          <img src="./img/LOGOMEC.png" />
          MECERDES
        </button>
        <button id="btnchoosecar">
          <img src="./img/LOGOPOSCHE.png" />
          PORSCHE
        </button>
      </div>
    </>
  );
};

export default HeaderComponen;

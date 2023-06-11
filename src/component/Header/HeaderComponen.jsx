import React, { useState } from "react";
import "./HeaderComponen.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponen = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accesstoken");
    setUser(undefined);
    navigate("/");
  };

  const userDB = JSON.parse(localStorage.getItem("user"));

  const listproductDB = useSelector((state) => {
    return state.cardSlice;
  });

  const cartDB = listproductDB.find(
    (cart) => cart.userCurrent?.id == userDB?.id
  );
  const listproduct = cartDB?.cartProduct;

  const handlesearch = (data) => {
    navigate("/", { state: { data } });
  };

  return (
    <>
      <div className="navcomponent">
        <img src={process.env.PUBLIC_URL + "img/LOGO5.jpg"} />

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
              <Link to={"/consignment"}>CONSIGNMENT CAR</Link>
            </li>
            <li>
              <Link to={"/buycar"}>BUY CAR</Link>
            </li>
            <li>
              <Link to={"/sellcar"}>SELL CAR</Link>
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
        <button id="btnchoosecar" onClick={() => handlesearch("audi")}>
          <img src="./img/LOGOAUDI.png" />
          AUDI
        </button>
        <button id="btnchoosecar" onClick={() => handlesearch("bmw")}>
          <img src="./img/LOGOBMW.png" />
          BMW
        </button>
        <button id="btnchoosecar" onClick={() => handlesearch("lexus")}>
          <img src="./img/LOGOLEXUS.png" />
          LEXUS
        </button>
        <button id="btnchoosecar" onClick={() => handlesearch("mercedes")}>
          <img src="./img/LOGOMEC.png" />
          MECERDES
        </button>
        <button id="btnchoosecar" onClick={() => handlesearch("porsche")}>
          <img src="./img/LOGOPOSCHE.png" />
          PORSCHE
        </button>
      </div>

      <div className="shoppingcart">
        <Link id="shoppingcart" to={"/shoppingcart"}>
          <img src="./img/basket.png" />
          <span>{listproduct?.length}</span>
        </Link>
      </div>
    </>
  );
};

export default HeaderComponen;

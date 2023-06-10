import React, { useMemo } from "react";
import "./ShoppingCart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCard,
  deleteproduct,
  minusproduct,
  plusproduct,
} from "../../redux/reducer/CardSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const userDB = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  if (!userDB) navigate("/");
  const listproductDB = useSelector((state) => {
    return state.cardSlice;
  });
  const cartDB = listproductDB.find(
    (cart) => cart.userCurrent?.id == userDB?.id
  );
  const listproduct = cartDB?.cartProduct;

  const dispatch = useDispatch();

  const totalprice = useMemo(() => {
    const total = listproduct?.reduce(
      (pre, urr) => pre + urr.price * urr.quantity,
      0
    );
    return total;
  }, [listproduct]);

  const handleplus = (item) => {
    dispatch(plusproduct(item));
  };

  const handleminus = (item) => {
    dispatch(minusproduct(item));
  };

  const handledelete = (id) => {
    dispatch(deleteproduct(id));
  };

  return (
    <div className="cart-page">
      <div>
        <table className="table-cart">
          <thead>
            <tr>
              <th>NO</th>
              <th>PRODUCT PICTURES</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL MONEY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {listproduct?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={item.img} alt="Ảnh sản phẩm" />
                </td>
                <td>{item.name}</td>
                <td className="text-danger">
                  {item.price.toLocaleString("en-GB")}
                </td>
                <td className="quantityshoppingcart">
                  <button onClick={() => handleminus(item)}>-</button>
                  <span className="mx-3 bg-white">{item.quantity}</span>
                  <button onClick={() => handleplus(item)}>+</button>
                </td>
                <td className="fw-bold ">
                  {Number(item?.quantity * item?.price)?.toLocaleString(
                    "en-GB"
                  )}
                </td>
                <td>
                  <button
                    className="btnoutlinedanger"
                    onClick={() => handledelete(item.id)}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="totalpayment">
        <div className="total-money">
          <b>TOTAL PAYMENT : </b>
          <span className="spantotalpayment">
            {totalprice?.toLocaleString("en-GB")}
          </span>
        </div>
        <button className="btntoltalpayment">PAY</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

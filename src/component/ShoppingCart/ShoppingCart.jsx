import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
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
            <tr>
              <td>1</td>
              <td>
                <img src={"./img/LEXUS-LX-570.jpeg"} alt="Ảnh sản phẩm" />
              </td>
              <td>LEXUS LX 570</td>
              <td className="text-danger">1.200.000.000</td>
              <td className="quantityshoppingcart">
                <button
                // onClick={() => handleminus(item)}
                >
                  -
                </button>
                <span className="mx-3 bg-white">0</span>
                <button
                // onClick={() => handleplus(item)}
                >
                  +
                </button>
              </td>
              <td className="fw-bold ">
                {/* {(item.price * item.quantity).toLocaleString("en-GB")} */}
                1.200.000.000
              </td>
              <td>
                <button
                  className="btnoutlinedanger"
                  // onClick={() => handledelete(item.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="totalpayment">
        <div className="total-money">
          <b>TOTAL PAYMENT : </b>
          <span className="spantotalpayment"> 1.200.000.000</span>
        </div>
        <button className="btntoltalpayment">PAY</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

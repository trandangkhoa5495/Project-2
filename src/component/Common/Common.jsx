import React from "react";
import "./Common.css";
const Common = () => {
  return (
    <>
      <div className="commontcomponent">
        <div className="commontcomponent1">
          <div className="commonline"></div>
          <p>
            WHY THEGIOIXELUOT.COM.VN - IS A RELIABLE ADDRESS TO BUY SURF CAR?
          </p>
          <div className="commonline"></div>
        </div>

        <div className="commontcomponent2">
          <div className="contactcomponenttotal">
            <div className="contactcomponentimg">
              <img src="./img/iconcontact3.png" />
            </div>

            <div className="contactcomponentcontent">
              <h6>Legal clarity quick name change</h6>
              <p>
                Committed to providing customers with full legal documents, the
                process of transferring name is quick and easy.
              </p>
            </div>
          </div>

          <div className="contactcomponenttotal">
            <div className="contactcomponentimg">
              <img src="./img/iconcontact2.png" />
            </div>

            <div className="contactcomponentcontent">
              <h6>Strict car import process</h6>
              <p>
                All cars imported into the showroom are rigorously tested by
                experts with more than 10 years of experience.
              </p>
            </div>
          </div>
          <div className="contactcomponenttotal">
            <div className="contactcomponentimg">
              <img src="./img/iconcontact1.png" />
            </div>

            <div className="contactcomponentcontent">
              <h6>Support car delivery nationwide</h6>
              <p>
                Customers in provinces and cities across the country are
                supported to see the car and deliver it to their place by
                thegioixeluot.com.vn.
              </p>
            </div>
          </div>
          <div className="contactcomponenttotal">
            <div className="contactcomponentimg">
              <img src="./img/iconcontact.png" />
            </div>

            <div className="contactcomponentcontent">
              <h6>Support installment up to 70%</h6>
              <p>
                You can immediately own your favorite car from only 30% of the
                car's value with quick installment procedures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="avatarcomment">
        <div className="avatarcomponent">
          <img src="./img/avatar.jpg" />
          <div>
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
          </div>
          <p>
            Thegioixeluot's staff works quickly and enthusiastically, feeling
            very satisfied with the service here
          </p>
          <p>
            <b>Hà Thanh Kiều</b>
            <span>/FPT Software</span>
          </p>
        </div>

        <div className="avatarcomponent">
          <img src="./img/avatar1.jpg" />
          <div>
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
          </div>
          <p>
            Friendly staff, attentive reception, quick procedures. Next time I
            buy, I will support the store again
          </p>
          <p>
            <b>Tống Kim Anh</b>
            <span>/SCV Media</span>
          </p>
        </div>

        <div className="avatarcomponent">
          <img src="./img/avatar2.jpg" />
          <div>
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
            <i className="fa-solid fa-star" style={{ color: "#ffbb00" }} />
          </div>
          <p>
            The car is beautiful but the price is also cheap, I am very
            satisfied, the procedure is fast, I wish the shop to grow more and
            more
          </p>
          <p>
            <b>Trần Minh Nhật</b>
            <span>Xiaomi</span>
          </p>
        </div>
      </div>

      <div className="utilitiestotal">
        <div className="utilities">
          <p>UTILITIES FOR YOU</p>
          <div className="imgsearch2">
            <div className="imgsearch1">
              <button className="imgsearch">
                <img src="./img/iconcontact4.png" />
              </button>
              <p>SEARCH</p>
            </div>

            <div className="imgsearch1">
              <button className="imgsearch3">
                <img src="./img/iconcontact5.png" />
              </button>
              <p>BOOK A CAR</p>
            </div>

            <div className="imgsearch1">
              <button className="imgsearch">
                <img src="./img/iconcontact6.png" />
              </button>
              <p>CONSIGNMENT</p>
            </div>

            <div className="imgsearch1">
              <button className="imgsearch3">
                <img src="./img/iconcontact7.png" />
              </button>
              <p>CHANGE CAR</p>
            </div>
          </div>
        </div>

        <div className="consultancy">
          <p>GET A CONSULTANCY</p>
          <p>
            Please leave your information, the consultant team of
            THEGIOIXELUOT.COM.VN will contact and advise directly.
          </p>
          <form className="formconsultancy">
            <label htmlFor="fullname">FULL NAME</label> <br />
            <input type="text" name="fullname" />
            <br />
            <label htmlFor="phonenumber">PHONE NUMBER</label> <br />
            <input type="text" name="phonenumber" />
            <br />
            <div className="formconsultancy1">
              <button>ADVISE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Common;

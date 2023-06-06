import React from "react";
import "./FooterComponent.css";
const FoorterComponent = () => {
  return (
    <div className="footercomponent">
      <div className="footerbtncomponent">
        <div>
          <div className="aboutus">ABOUT US</div>
          <ul id="footerbtn">
            <li>
              <button>COMPANY</button>
            </li>
            <li>
              <button>CONTACT US</button>
            </li>
            <li>
              <button>MEDIA CENTER</button>
            </li>
            <li>
              <button>COOKIE SETTINGS</button>
            </li>
            <li>
              <button>NEWSLETTER</button>
            </li>
            <li>
              <button>CAREERS</button>
            </li>
            <li>
              <button>SUSTAINABILITY</button>
            </li>
            <li>
              <button>PRIVACY & LEGAL</button>
            </li>
          </ul>
        </div>

        <div>
          <div className="aboutus">CONTACT US</div>
          <ul className="icon-btn">
            <li>
              <i
                className="fa-brands fa-instagram"
                style={{ color: "#ffffff" }}
              />
              <span>INSTAGRAM</span>
            </li>
            <li>
              <i
                className="fa-brands fa-facebook-f"
                style={{ color: "#ffffff" }}
              />
              <span>FACEBOOK </span>
            </li>
            <li>
              <i
                className="fa-brands fa-youtube"
                style={{ color: "#ffffff" }}
              />
              <span>YOUTUBE</span>
            </li>
            <li>
              <i
                className="fa-brands fa-twitter"
                style={{ color: "#ffffff" }}
              />
              <span> TWITTER</span>
            </li>
            <li>
              <i className="fa-brands fa-tiktok" style={{ color: "#ffffff" }} />
              <span>TIKTOK</span>
            </li>
            <li>
              <i
                className="fa-brands fa-invision"
                style={{ color: "#ffffff" }}
              />
              <span>INVISION</span>
            </li>
            <li>
              <i
                className="fa-brands fa-snapchat"
                style={{ color: "#ffffff" }}
              />
              <span>SNAPCHAT</span>
            </li>
            <li>
              <i
                className="fa-brands fa-discord"
                style={{ color: "#ffffff" }}
              />
              <span>DISCORD</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="mapfooter">MAP</div>
          <div className="mapfooter1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.3777660284436!2d108.17955827583111!3d16.04587494006132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190cc4cc6eed%3A0xd1dbced60561753!2zMzkyIMSQLiBUw7RuIMSQ4bqjbiwgSG_DoCBBbiwgQ-G6qW0gTOG7hywgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1686049792688!5m2!1svi!2s"
              width={500}
              height={335}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="footernav-content">
        <p>
          * The consumption and emissions values in the website refer to your
          geographical IP. This value might be unrealistic if you navigate using
          VPN or if the position of your Internet provider is imprecise. If you
          believe you are incorrectly geolocalized, contact your dealer to get
          valid consumption and emissions information in your area.
        </p>
        <p>
          * Copyright © 2023 BMW S.p.A. a sole shareholder company part of Audi
          Group.
        </p>
        <p>* All rights reserved. VAT no. IT 00591801204</p>
      </div>
    </div>
  );
};

export default FoorterComponent;

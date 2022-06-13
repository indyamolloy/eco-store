import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <h5>Shop: </h5>
        <Link
          className="footerLink"
          to="/womens"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Womens
        </Link>
        <Link
          className="footerLink"
          to="/mens"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Mens
        </Link>
        <Link
          className="footerLink"
          to="/electronics"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Electronics
        </Link>
        <Link
          className="footerLink"
          to="/jewelery"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Jewelery
        </Link>
      </div>
      <div>
        <p className="copyright">© {date} OSC store. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./Header.css";
import logo from ".././images/logo.png";

const Header = () => {
  return (
    <div>
      <div>
        <a href="#">
          <img src={logo} alt="" className="logo-main" />
        </a>
      </div>

      <div>
        <div className="bg-color">
          <nav>
            <a href="#" className="pad">Shop</a>
            <a href="#">Product List</a>
            <a href="#">Manage Order</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

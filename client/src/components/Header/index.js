import React from "react";
import "./style.css";
import logo from "../../assets/logo.jpg";

function Header(props) {
  return (
    <div className="heading">
      <img src={logo}></img>
    </div>
  );
}

export default Header;

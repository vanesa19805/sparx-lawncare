import React from 'react';
import "./style.css";
import logo from "../../assets/logo.jpg";

function Header(props) {
    return (
        <div className="heading">
            {/* <h1 id="appname">Sparx Lawncare</h1>
            <p>Lawn care, landscaping, and snow removal made simple</p> */}
            <img src={logo}></img>
        </div>
    );
}

export default Header;
import React from 'react';
import "./style.css";

function Header(props) {
    return (
        <div className="heading">
            <h1 id="appname">Sparx Lawncare</h1>
            <p>Lawn care, landscaping, and snow removal made simple</p>
        </div>
    );
}

export default Header;
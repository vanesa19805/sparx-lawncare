import React, { useState, useEffect } from "react";
import Apiroutes from "../../utils/API";

function NavLinks(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    Apiroutes.getUser().then((res) => {
      console.log(res);
      if (res.data.loggedIn) {
        console.log("User is logged in!");
        setIsLoggedIn(true);
      } else {
        console.log("User is not logged in!");
        // redirect to somewhere
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleLogout = () => {
    Apiroutes.logout().then((res) => {
      console.log("logged out");
      localStorage.clear();
      history.pushState("/");
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/servicepage">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <a className="nav-link" href="/" onClick={handleLogout}>
                    Logout
                  </a>
                ) : (
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavLinks;

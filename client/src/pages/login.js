import React from "react";
import logo from "../assets/lawn-mower-logo.jpeg";
import "./style.css";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <LoginWrapper>
        <section className="col-10 mx-auto justify-content-center text-center col-lg-5 fs-5 fw-bold">
          <img
            src={logo}
            className="img-fluid"
            style={{ width: "150px" }}
            alt="logo"
          />
          <LoginForm />
        </section>
      </LoginWrapper>
    </>
  );
}
export default Login;

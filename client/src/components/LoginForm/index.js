import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Api from "../../utils/API";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const obj = {
      username: username,
      password: password,
    };
    console.log(obj)
    Api.loginUser(obj).then((res) => {
        console.log(res);
      history.push("/user-home");
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="m-3">
        <h2>LOGIN</h2>
        <section className="mb-3">
          <label for="username" className="form-label">
            User Name:
          </label>
          <br></br>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </section>
        <section className="mb-3">
          <label for="user-password" className="form-label">
            Password
          </label>
          <br></br>
          <input
            placeholder="password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </section>
        <button id="login" className="btn btn-dark localBtn">
          Login
        </button>
        <section className="m-3 justify-content-end text-end">
          <label for="signupInstead" className="form-label">
            Not A Member Yet! Please Signup!
          </label>
          <Link id="signupInstead" to="/signup" class="btn btn-light localBtn">
            Signup
          </Link>
        </section>
      </form>
    </>
  );
}

export default LoginForm;

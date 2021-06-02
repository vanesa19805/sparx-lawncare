import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Api from "../../utils/API";
import Card from "react-bootstrap/Card";

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
    console.log(obj);
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
    <div className="col-6 mx-auto p-5">
      <Card>
        <Card.Header><h3 className="text-center">LOGIN</h3></Card.Header>
        <Card.Body>
          <form onSubmit={handleFormSubmit} className="m-3">
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
            <button id="login" className="btn btn-primary localBtn">
              Login
            </button>
            <section className="m-3 justify-content-end text-end">
              <label for="signupInstead" className="form-label pe-2">
                Not A Member Yet! Please Signup!
              </label>
              <Link
                id="signupInstead"
                to="/signup"
                class="btn btn-primary localBtn"
              >
                Signup
              </Link>
            </section>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../utils/API";

function Signup(props) {
   const [firstName, setFirstName]  = useState('');
   const [lastName, setLastName]  = useState('');
   const [email, setEmail]  = useState('');
   const [password, setPasword]  = useState('');

  const handleFormSubmit = async event => {
    event.preventDefault();

    const obj = {
      first:firstName,
      last:lastName,
      email: email,
      pass: password
    }
    Api.createUser(obj);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'firstName'){
      setFirstName(value);
    }else if (name === 'lastName'){
      setLastName(value);
    }else if (name === 'email'){
      setEmail(value);
    }else if (name === 'password'){
      setPasword(value);
    }
  };

  return (
    <div className="container my-1">
      <Link to="/login">
        ← Go to Login
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <br></br>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

}

export default Signup;
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Api from "../utils/API";

function Signup(props) {
   const [username, setUserName]  = useState('');
   const [name, setName]  = useState('');
   const [email, setEmail]  = useState('');
   const [password, setPassword]  = useState('');
   const history = useHistory();

  const handleFormSubmit = async event => {
    event.preventDefault();

    const obj = {
      username: username,
      name: name,
      email: email,
      password: password
    }
    Api.createUser(obj)
    .then(() => {
      history.push('/');
    })
  };

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'username'){
      setUserName(value);
    }else if (name === 'name'){
      setName(value);
    }else if (name === 'email'){
      setEmail(value);
    }else if (name === 'password'){
      setPassword(value);
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
          <label htmlFor="username">User Name: </label>
          <br></br>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name: </label>
          <br></br>
          <input
            placeholder="Name"
            name="name"
            type="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email: </label>
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
          <label htmlFor="pwd">Password: </label>
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
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    </div>
    
  );

}

export default Signup;
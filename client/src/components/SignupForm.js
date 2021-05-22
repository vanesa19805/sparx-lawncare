import React from 'react';
import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <>
      <form className="m-3">
        <h2>SIGN UP</h2>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
          />
        </div>


        <section className="mb-3">
          <label for="signupEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="signupEmail" aria-describedby="useremail2" />
        </section>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="password"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        <button id="signup" className="btn btn-dark localBtn">Submit</button>
        <section className="m-3 justify-content-end text-end">
          <label for="loginInstead" className="form-label">Already a member please login?</label>
          <Link id="loginInstead" to="/login" className="btn btn-light localBtn">Login</Link>
        </section>

      </form>
    </>
  );
}

export default SignupForm;

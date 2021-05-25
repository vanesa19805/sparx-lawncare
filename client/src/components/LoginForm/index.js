import React from 'react';
import { Link } from 'react-router-dom';


function LoginForm() {
    return (
        <>
            <form className="m-3">
                <h2>LOGIN</h2>
                <section className="mb-3">
                    <label for="user-email" className="form-label">Email address:</label>
                <br></br>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                    />
                
                </section>
                <section className="mb-3">
                    <label for="user-password" className="form-label">Password</label>
                    <br></br>
                    <input
                        placeholder="password"
                        name="password"
                        type="password"
                        id="pwd"
                    />
                </section>
                <button id="login" className="btn btn-dark localBtn">Login</button>
                <section className="m-3 justify-content-end text-end">
                    <label for="signupInstead" className="form-label">Not A Member Yet! Please Sighup!</label>
                    <Link id="signupInstead" to="/signup" class="btn btn-light localBtn">Signup</Link>
                </section>
            </form>
        </>
    )
}

export default LoginForm

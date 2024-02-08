import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h2 style={{ color: "grey"}}>Login:</h2>
      <small>
        <span>Not registered?</span>{" "}
        <Link to={"/register"}>
          <b>Register now!</b>{" "}
        </Link>
      </small>

      <form className="form">
        <div className="form-item">
          <label htmlFor="email">Email:</label>

          <input id="email" type="email" placeholder="abc@...." />
        </div>

        <div className="form-item">
          <label htmlFor="password">Password:</label>

          <input id="password" type="text" placeholder="***" />
        </div>
        <div className="form-item-btn">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

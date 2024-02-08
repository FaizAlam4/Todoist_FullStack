import React from "react";
import "./Registration.css";

function Registration() {
  return (
    <div>
      <h2>Register:</h2>

      <form className="form">
        <div className="form-item">
          <label htmlFor="email">Email:</label>

          <input id="email" type="email" placeholder="abc@...." />
        </div>
        <div className="form-item">
          <label htmlFor="name">Name:</label>

          <input id="name" type="text" placeholder="name" />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>

          <input id="password" type="text" placeholder="***" />
        </div>
        <div className="form-item-btn">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;

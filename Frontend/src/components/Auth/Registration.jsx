import React from "react";
import "./Registration.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myapi from "../../api/myapi.js";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const reqData = {
    name: name,
    email: email,
    password: password,
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const handleRegister = () => {
    myapi
      .post(`http://localhost:8080/rest/v2/register`, reqData, headers)
      .then((data) => {
        console.log(data.data);
        alert("Registered!");
        if (data.data) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("User might be already registered!");
      });
  };

  return (
    <div>
      <h2>Register:</h2>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <div className="form-item">
          <label htmlFor="name">Name:</label>

          <input
            id="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email:</label>

          <input
            id="email"
            type="email"
            placeholder="abc@...."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="password">Password:</label>

          <input
            id="password"
            type="text"
            placeholder="***"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
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

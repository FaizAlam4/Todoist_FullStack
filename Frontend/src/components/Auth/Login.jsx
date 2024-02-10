import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myapi from "../../api/myapi.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
  };

  const handleLogin = () => {
    myapi
      .post(`http://localhost:8080/rest/v2/login`, {
        email: email,
        password: password,
      }, headers)
      .then((data) => {
        console.log(data.token);
        if (data.data) {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Either wrong credentials or you may have to register first!");
      });
  };

  return (
    <div>
      <h2 style={{ color: "grey" }}>Login:</h2>
      <small>
        <span>Not registered?</span>{" "}
        <Link to={"/register"}>
          <b>Register now!</b>{" "}
        </Link>
      </small>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
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
          />
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

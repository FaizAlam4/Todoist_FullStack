import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/index.js";

import dotenv from "dotenv";
dotenv.config();

const User = db.users;

export const register = (req, res) => {
  let { userId, name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    name.trim() == "" ||
    email.trim() == "" ||
    password.trim() == ""
  ) {
    res
      .status(500)
      .send({ message: "There should be valid values in the given fields!" });
  } else {
    User.findOne({ where: { email: email } })
      .then((data) => {
        if (data) {
          res.status(500).send({ message: "Email already exists!" });
        }
      })
      .catch((err) => {
        res.send({ message: err.messages });
      });
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send({ message: "Error hashing password." });
      }
      User.create({
        name: name,
        email: email,
        password: hashedPassword,
      })
        .then((data) => {
          res
            .status(201)
            .send({ message: "User created successfully!", data: data });
        })
        .catch((err) => {
          res
            .status(500)
            .send({ message: "Error creating user: " + err.message });
        });
    });
  }
};

export const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email: email } })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res
            .status(500)
            .send({ message: "Error comparing passwords." });
        }
        if (!result) {
          return res.status(401).send({ message: "Invalid credentials." });
        }

        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );

        res.cookie("authToken", token, {
          httpOnly: true
        });
        res.status(200).send({ token: token, data: user });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: "Error finding user: " + err.message });
    });
};

export const logout = (req, res) => {
  res.clearCookie("authToken");
  res.status(200).send({ message: "Logged Out" });
};

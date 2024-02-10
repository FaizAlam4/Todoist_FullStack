import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  // const token = req.headers.authorization;

  const myToken = req.cookies.authToken;
  console.log("Cookie ka token->", myToken);
  if (!myToken) {
    return res.status(401).send({ message: "No token provided." });
  }

  // const tokenString = token.split(" ")[1];
  try {
    const tokenData = jwt.verify(myToken, process.env.SECRET_KEY);

    req.userId = tokenData.id;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Failed to authenticate token." });
  }
};

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/models/index.js";
import router from "./app/routes/project.routes.js";
import taskRouter from "./app/routes/task.routes.js";
import commentRouter from "./app/routes/comment.routes.js";
import labelRouter from "./app/routes/label.routes.js";
import { verifyToken } from "./app/middleware/authVerify.js";
import authRouter from "./app/routes/auth.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

var corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db..");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/rest/v2", authRouter);
app.use("/rest/v2/projects", verifyToken, router);
app.use("/rest/v2/tasks", verifyToken, taskRouter);
app.use("/rest/v2/comments", commentRouter);
app.use("/rest/v2/labels", labelRouter);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated db...");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

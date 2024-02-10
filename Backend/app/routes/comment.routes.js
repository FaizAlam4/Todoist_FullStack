import { Router } from "express";
import {
  getCommentAll,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.controller.js";
var commentRouter = Router();

commentRouter.get("/", getCommentAll);
commentRouter.get("/:id", getCommentById);
commentRouter.post("/", createComment);
commentRouter.put(":id", updateComment);
commentRouter.delete("/:id", deleteComment);

export default commentRouter;

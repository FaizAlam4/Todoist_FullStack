import {
  findProjectAll,
  createProject,
  findProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";
import { verifyToken } from "../middleware/authVerify.js";
import { Router } from "express";
var router = Router();

router.get("/", verifyToken, findProjectAll);
router.get("/:id", findProjectById);
router.post("/", verifyToken, createProject);
router.post("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;

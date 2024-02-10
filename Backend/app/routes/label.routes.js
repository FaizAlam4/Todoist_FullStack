import { Router } from "express";
import {
  getLabelsAll,
  getLabelById,
  createLabel,
  updateLabel,
  deleteLabel,
} from "../controllers/label.controller.js";
var labelRouter = Router();

labelRouter.get("/", getLabelsAll);
labelRouter.get("/:id", getLabelById);
labelRouter.post("/", createLabel);
labelRouter.put("/:id", updateLabel);
labelRouter.delete("/:id", deleteLabel);

export default labelRouter;

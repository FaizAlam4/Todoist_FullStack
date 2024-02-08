import { register, login } from "../controllers/auth.controller.js";
import { Router } from "express";
var authRouter = Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
// authRouter.post('/logout',logout)
 


export default authRouter
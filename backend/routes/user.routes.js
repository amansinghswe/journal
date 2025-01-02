import {Router} from "express";
import * as userController from "../controllers/user.controller.js";
import {body} from "express-validator";

const UserRouter = Router()

UserRouter.get("/", userController.indexRoute);
UserRouter.post("/v1/register",
    body("name").isLength({min: 1}).withMessage("Name is required"),
    body("email").isEmail().withMessage("Email must be a valid email address"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters"),
    userController.createUserController);

export default UserRouter;

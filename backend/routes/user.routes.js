import {Router} from "express";
import {createUserFromForm, indexRoute} from "../controllers/user.controller.js";

const UserRouter = Router()

UserRouter.get("/", indexRoute);
UserRouter.post("/v1/createUserFromForm", createUserFromForm);

export default UserRouter;
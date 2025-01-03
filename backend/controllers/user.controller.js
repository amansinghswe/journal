// Initialize express router
import { validationResult } from 'express-validator';
import * as userService from "../services/user.service.js";

function indexRoute(request, response) {
    try {
        response.status(200).json({message: "Welcome to the user controller"});
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

async function createUserController(request, response, next) {
    try {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const userData = {
            name: request?.body?.name,
            email: request?.body?.email,
            password: request?.body?.password,
            profilePicture: request?.body?.profilePicture,
            googleId: request?.body?.googleId
        };
        const user = await userService.createUser(userData);

        const token = await user.generateJWT();

        response.status(201).json({user, token});
    } catch (error) {
        console.log("Error creating user: ", error.message);
        response.status(500).json({message: error.message});
    }
}

async function loginUserController(request, response) {
    try {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const userData = {
            email: request?.body?.email,
            password: request?.body?.password
        };
        const user = await userService.loginUser(userData);

        const token = await user.generateJWT();

        response.status(200).json({user, token});
    } catch (error) {
        console.log("Error logging in user: ", error.message);
        response.status(500).json({message: error.message});
    }
}

export {
    indexRoute as indexRoute,
    createUserController as createUserController,
    loginUserController as loginUserController
}

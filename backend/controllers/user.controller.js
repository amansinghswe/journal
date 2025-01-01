// Initialize express router
import { createUser } from '../services/user.service.js';

function indexRoute(request, response) {
    try {
        response.status(200).json({message: "Welcome to the user controller"});
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

async function createUserFromForm(request, response, next) {
    try {
        const userData = {
            name: request?.body?.name,
            email: request?.body?.email,
            password: request?.body?.password
        };
        await createUser(userData);
        response.status(200).json({message: "User created successfully"});
    } catch (error) {
        console.log("Error creating user: ", error.message);
        response.status(500).json({message: error.message});
    }
}

export {
    indexRoute as indexRoute,
    createUserFromForm as createUserFromForm
}

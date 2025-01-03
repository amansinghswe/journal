import User from '../models/user.models.js';

async function createUser(userData) {
    try {
        if (!userData?.name || !userData?.email || !userData?.password) {
            throw new Error('Name, email, and password are required to create a user');
        }
        const hashedPassword = await User.hashPassword(userData.password);
        const user = await User.create({
            name: userData.name,
            email: userData.email,
            password: hashedPassword,
            // todo - add googleId and profilePicture
            // googleId: userData.googleId,
            // profilePicture: userData.profilePicture,
        });
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

async function loginUser (userData) {
    // Todo : Write Logic to login user
}

export {
    createUser as createUser,
    loginUser as loginUser
}

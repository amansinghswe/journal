import User from '../models/user.models.js';

async function createUser(userData) {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

module.exports = {
    createUser : createUser
};

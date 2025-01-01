import mongoose from "mongoose";

const USER = new mongoose.Schema({
    googleId: {type: String},
    password: {type: String, select: false},
    name: {type: String, required: true},
    profilePicture: {type: String},
    email: {type: String, required: true, unique: true, minLength: [6, 'Email must be at least 6 characters'], maxLength: [50, 'Email must be at most 50 characters']},
    journals: [{type: mongoose.Types.ObjectId, ref: 'Journal'}],
}, {timestamps: true});

USER.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

USER.statics.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

USER.statics.generateJWT = async function () {
    return jwt.sign({email: this.email}, process.env.JWT_SECRET);
}

export default mongoose.model('User', USER);

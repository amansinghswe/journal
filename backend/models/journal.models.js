import mongoose from "mongoose";

const JOURNAL_SCHEMA = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now},
    user: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
}, {timestamps: true});

export default mongoose.model('Journal', JOURNAL_SCHEMA);
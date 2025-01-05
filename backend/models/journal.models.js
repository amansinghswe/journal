import mongoose from "mongoose";

const JOURNAL_SCHEMA = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now },
        user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

// Static method to find journals by a specific user
JOURNAL_SCHEMA.statics.findByUser = async function (userId) {
    return await this.find({ user: userId }).exec();
};

// Instance method to update the content of a journal
JOURNAL_SCHEMA.methods.updateContent = async function (newContent) {
    this.content = newContent;
    this.date = new Date(); // Update the date to reflect the modification time
    return this.save();
};

// Instance method to check if the journal belongs to a specific user
JOURNAL_SCHEMA.methods.belongsToUser = function (userId) {
    return this.user.toString() === userId.toString();
};

export default mongoose.model("Journal", JOURNAL_SCHEMA);
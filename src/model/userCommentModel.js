const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
    email: { type: String },
    name:{type: String},
    comment: { type: String },
    status:{type: String, default: 'NEW'},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const commentModel = mongoose.model("comments", commentSchema);
module.exports = commentModel;
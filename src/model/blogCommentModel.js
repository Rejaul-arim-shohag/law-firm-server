const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const blogComment = mongoose.Schema({
    blogId:{type: ObjectId},
    name:{type: String},
    comment:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const blogCommentModel = mongoose.model("blogcomments", blogComment);
module.exports = blogCommentModel;
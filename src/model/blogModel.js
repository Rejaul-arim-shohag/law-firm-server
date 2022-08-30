const mongoose = require("mongoose");
const blog = mongoose.Schema({
    authorName:{type: String},
    image:{type: String},
    title:{type: String},
    description:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const blogModel = mongoose.model("blogs", blog);
module.exports = blogModel;
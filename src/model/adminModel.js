const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
    email:{type: String},
    password:{type: String},
    photo:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const adminModel = mongoose.model("admins", adminSchema);
module.exports = adminModel;
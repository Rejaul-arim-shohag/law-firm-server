const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email:{type: String, unique: true},
    fullName:{type: String},
    mobile:{type: String},
    password:{type: String},
    photo:{type: String},
    isAdmin:{type: Number,default:"0"},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
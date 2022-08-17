const mongoose = require("mongoose");
const footerSchema = mongoose.Schema({
    name:{ type: String, require: true},
    link:{ type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const  footerModel = mongoose.model("footerServices", footerSchema);
module.exports = footerModel;
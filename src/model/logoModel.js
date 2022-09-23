const mongoose = require("mongoose");
const logoSchema = mongoose.Schema({
    logo:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const logoModel = mongoose.model("logos", logoSchema);
module.exports = logoModel;
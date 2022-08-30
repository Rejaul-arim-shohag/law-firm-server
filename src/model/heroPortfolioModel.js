const mongoose = require("mongoose");
const portfolio = mongoose.Schema({
    image:{type: String},
    name:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const portfolioModel = mongoose.model("portfolios", portfolio);
module.exports = portfolioModel;
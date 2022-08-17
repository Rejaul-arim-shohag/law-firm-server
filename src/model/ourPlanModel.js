const mongoose = require("mongoose");
const planSchema = mongoose.Schema({
    planName: { type: String},
    fee: { type: String},
    benifit: { type: String},
    extraBenifit1:{type: String},
    extraBenifit2:{type: String},
    extraBenifit3:{type: String},
    extraBenifit4:{type: String},
    extraBenifit5:{type: String},
    extraBenifit6:{type: String},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const planModel = mongoose.model("plans", planSchema);
module.exports = planModel;
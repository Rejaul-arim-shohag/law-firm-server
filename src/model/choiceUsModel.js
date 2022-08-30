const mongoose = require("mongoose");
const choiceUs = mongoose.Schema({
    image:{type: String},
    title:{type: String},
    description:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const choiceUsModel = mongoose.model("choices", choiceUs);
module.exports = choiceUsModel;
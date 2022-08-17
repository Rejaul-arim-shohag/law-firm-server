const mongoose = require("mongoose");
const ourPracticeSchema = mongoose.Schema({
    title:{type: String},
    description:{type: String},
    icon:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const ourPracticeModel = mongoose.model("ourPractices", ourPracticeSchema);
module.exports = ourPracticeModel;
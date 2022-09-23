const mongoose = require("mongoose");
const heroContentSchema = mongoose.Schema({
    title1:{type: String},
    title2:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const heroContentModel = mongoose.model("herocontents", heroContentSchema);
module.exports = heroContentModel;
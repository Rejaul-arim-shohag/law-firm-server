const mongoose = require("mongoose");
const heroImageSchema = mongoose.Schema({
    photo:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const heroImageModel = mongoose.model("heroimages", heroImageSchema);
module.exports = heroImageModel;
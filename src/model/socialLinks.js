const mongoose = require("mongoose");
const socialLinkSchema = mongoose.Schema({
    link:{type: String},
    icon:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const socialLinkModel = mongoose.model("sociallinks", socialLinkSchema);
module.exports = socialLinkModel;
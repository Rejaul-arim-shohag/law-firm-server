const mongoose = require("mongoose");
const footer = mongoose.Schema({
    name: { type: String },
    link:{ type: String },
    createDate: { type: Date, default: Date.now() },
}, { versionKey: false });

const footerModel = mongoose.model("footers", footer);
module.exports = footerModel;
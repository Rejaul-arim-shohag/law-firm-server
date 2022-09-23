const mongoose = require("mongoose");
const privacySchema = mongoose.Schema({
    content: { type: String },
}, { timestamps: true }, { versionKey: false });

const privacyModel = mongoose.model("privacy", privacySchema);
module.exports = privacyModel;
const mongoose = require("mongoose");
const termsAndConditionSchema = mongoose.Schema({
    content: { type: String },
}, { timestamps: true }, { versionKey: false });

const termsAndConditionModel = mongoose.model("terms", termsAndConditionSchema);
module.exports = termsAndConditionModel;
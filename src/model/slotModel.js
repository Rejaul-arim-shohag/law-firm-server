const mongoose = require("mongoose");
const slotSchema = mongoose.Schema({
    slotTime: { type: String, require: true },
    slotDate: { type: Date, require: true },
}, { versionKey: false });

const slotModel = mongoose.model("slots", slotSchema);
module.exports = slotModel;
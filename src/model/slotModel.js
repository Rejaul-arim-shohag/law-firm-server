const mongoose = require("mongoose");
const slotSchema = mongoose.Schema({
    ServiceID:{type: Number, require:true},
    SlotID: { type: Number, default: function () { return Math.floor(Date.now() / 1000) } },
    startTime: { type: String, require:true},
    endTime: { type: String, require:true},
    slotDate: { type:Date, require:true},
}, { versionKey: false });

const slotModel = mongoose.model("slots", slotSchema);
module.exports = slotModel;
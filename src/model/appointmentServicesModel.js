const mongoose = require("mongoose");
const appointmentServicesSchema = mongoose.Schema({
    ServiceID: { type: Number, default: function () { return Math.floor(Date.now() / 1000) } },
    serviceName: { type: String },
    serviceFee: { type: String },
    date: { type: Date , require: true}
}, { versionKey: false });

const appointmentServicesModel = mongoose.model("appointmentsServices", appointmentServicesSchema);
module.exports = appointmentServicesModel;
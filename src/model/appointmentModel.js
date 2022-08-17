const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
    serviceName: { type: String},
    apointmentDate: { type: String},
    Weekday: { type: String},
    slot: { type: String},
    name: { type: String},
    age: { type: String},
    phone: { type: String},
    email:{ type: String},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const appointmentModel = mongoose.model("appointments", appointmentSchema);
module.exports = appointmentModel;
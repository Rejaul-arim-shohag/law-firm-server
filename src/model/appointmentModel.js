const mongoose = require("mongoose");
const appointmentSchema = mongoose.Schema({
    name: { type: String},
    email:{ type: String},
    phone: { type: String},
    serviceName: { type: String},
    slot: { type: String},
    apointmentDate: { type: Date},
    status: { type: String, default: 'NEW'},
    createDate: { type: Date, default: Date.now()},
}, { versionKey: false });

const appointmentModel = mongoose.model("appointments", appointmentSchema);
module.exports = appointmentModel;
const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
    userEmail:{type: String},
    name:{type: String},
    email:{type: String},
    mobile:{type: String},
    subject:{type: String},
    message:{type: String},
    status:{type: String, default: 'NEW'},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const  contactModel = mongoose.model("messages", contactSchema);
module.exports = contactModel;
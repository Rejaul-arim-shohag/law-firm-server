const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
    serviceID:{type:Number, default:function(){return Math.floor(Date.now()/1000)}},
    Name:{type: String},
    icon:{type: String},
    description:{type: String},
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const serviceModel = mongoose.model("services", serviceSchema);
module.exports = serviceModel;
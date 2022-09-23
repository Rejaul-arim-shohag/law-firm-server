const mongoose = require("mongoose");
const addressSchema = mongoose.Schema({
    address:{
        worksDay:{type: String},
        location:{type: String},
        phone:{type: String},
        email:{type: String},
    },
    aboutUs:{type: String},
    socialLink:{
        facebook:{type: String},
        linkedin:{type: String},
        instagram:{type: String},
        twitter:{type: String},
        youtube:{type: String},
    },
    createDate:{type:Date, default:Date.now()},
}, {versionKey:false});

const addressModel = mongoose.model("address", addressSchema);
module.exports = addressModel;
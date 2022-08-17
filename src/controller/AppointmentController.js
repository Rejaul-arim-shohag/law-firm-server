const AppointmentModel = require("../model/appointmentModel")
exports.createAppointment =(req, res)=>{
    AppointmentModel.create(req.body, (err,data)=>{
        if(err){
            res.status(200).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.readAppointment = (req, res)=>{
    const reqBody=req.body;
    AppointmentModel.aggregate([
        {$match:reqBody},
        {$project:{
            _id:0,
            email:1,
            fullName:1,
            mobile:1,
            photo:1,
        }}
    ], (err, data)=>{
        if(err){
            res.status(400).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}


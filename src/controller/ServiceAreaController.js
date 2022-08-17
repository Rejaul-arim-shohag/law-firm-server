const ServiceAreaModel = require("../model/serviceAreaModel")
exports.createService=(req, res)=>{
    ServiceAreaModel.create(req.body, (err, data)=>{
        if(err){
            res.status(500).json({"status": "fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.readServiceAreas=(req, res)=>{
    ServiceAreaModel.aggregate([
        {
            $project:{
                serviceID:1,
                _id:0,
                Name:1,
                icon:1,
                description:1
            }
        }
    ],(err, data)=>{
        if(err){
            res.status(500).json({"status": "fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.readServiceById=(req, res)=>{
    const serviceId =  req.params.serviceID;
    ServiceAreaModel.findOne(
       {serviceID:serviceId},
       {
        _id:0,
        Name:1,
        icon:1,
        description:1,
        serviceID:1
    }
    , (err, data)=>{
        if(err){
            res.status(500).json({"status": "fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
exports.updateServiceArea=(req, res)=>{
    const serviceId =  req.params.serviceID
    ServiceAreaModel.updateOne({serviceID:serviceId}, req.body, (err, data)=>{
        if(err){
            res.status(500).json({"status": "fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.deleteServiceArea=(req, res)=>{
    const serviceId =  req.params.serviceID
    ServiceAreaModel.deleteOne({serviceID:serviceId}, (err, data)=>{
        if(err){
            res.status(500).json({"status": "fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
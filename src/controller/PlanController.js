const OurPlanModel = require("../model/ourPlanModel");
const mongoose = require("mongoose");

exports.createOurPlan = (req, res) => {
    OurPlanModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readOurPlans = (req, res) => {
    OurPlanModel.aggregate([
        {
            $project: {
                _id: 1,
                planName:1,
                fee: 1,
                benifit: 1,
                extraBenifit1:1,
                extraBenifit2:1,
                extraBenifit3:1,
                extraBenifit4:1,
                extraBenifit5:1,
                extraBenifit6:1,

        }
        }
    ], (err, data) => {
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.updateOurPlan=(req, res)=>{
    const PlanID=req.params.PlanID;
    OurPlanModel.updateOne({_id:PlanID},req.body, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
exports.deleteOurPlan=(req, res)=>{
    const PlanID=req.params.PlanID;
    OurPlanModel.deleteOne({_id:PlanID}, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
exports.readPlanById=(req, res)=>{
    const PlanID=req.params.PlanID;
    let id = mongoose.Types.ObjectId(PlanID);
    OurPlanModel.aggregate([
        {$match:{_id:id}},
    ], (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
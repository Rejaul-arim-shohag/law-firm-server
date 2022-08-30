const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const footerModel = require("../../src/model/footerModel");
exports.createFooterLegalService = (req, res) => {
    footerModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readFooterLegalService = (req, res) => {
    footerModel.find({}, ((err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    }))
}

exports.singleLegalService = (req, res) => {
    footerModel.aggregate([
        {$match:{
            _id:ObjectId(req.params.id)
        }}
    ], ((err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    }))
}

exports.updateLegalService= (req, res) => {
    footerModel.updateOne({_id: req.params.id}, req.body, (err, data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteLegalService = (req, res) => {
    footerModel.deleteOne({_id:req.params.id},(err,data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


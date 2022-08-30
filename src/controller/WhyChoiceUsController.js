const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const whyChoiceUseModel = require("../../src/model/choiceUsModel.js");
exports.createChoiceUsItem = (req, res) => {
    whyChoiceUseModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readChoiceUsItems = (req, res) => {
    whyChoiceUseModel.find({}, ((err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    }))
}

exports.singleChoiceUsItem = (req, res) => {
    whyChoiceUseModel.aggregate([
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

exports.updateChoiceUsItem = (req, res) => {
    whyChoiceUseModel.updateOne({_id: req.params.id}, req.body, (err, data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteChoiceUsItem = (req, res) => {
    whyChoiceUseModel.deleteOne({_id:req.params.id},(err,data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


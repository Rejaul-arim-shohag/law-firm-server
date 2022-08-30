const heroPortfolioModel = require("../model/heroPortfolioModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


exports.createPortfolio = (req, res) => {
    heroPortfolioModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.portfolioList = (req, res) => {
    heroPortfolioModel.find({}, ((err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    }))
}

exports.readSinglePortfolioItem = (req, res) => {
    heroPortfolioModel.aggregate([
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

exports.updatePortfolioItem = (req, res) => {
    heroPortfolioModel.updateOne({_id: req.params.id}, req.body, (err, data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deletePortfolioItem = (req, res) => {
    heroPortfolioModel.deleteOne({_id:req.params.id},(err,data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


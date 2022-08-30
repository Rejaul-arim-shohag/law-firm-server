const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const blogCommentModel = require("../../src/model/blogCommentModel");
exports.createBlogComment = (req, res) => {
    blogCommentModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readBlogComment = (req, res) => {
    blogCommentModel.find({}, ((err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    }))
}

exports.singleBlogComment = (req, res) => {
    blogCommentModel.aggregate([
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

exports.updateBlogComment = (req, res) => {
    blogCommentModel.updateOne({_id: req.params.id}, req.body, (err, data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteBlogComment = (req, res) => {
    blogCommentModel.deleteOne({_id:req.params.id},(err,data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


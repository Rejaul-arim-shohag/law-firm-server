const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const blogModel = require("../../src/model/blogModel");

exports.createBlog = (req, res) => {
    blogModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readBlogList = (req, res) => {
    blogModel.aggregate([
        {$lookup:{from:"blogcomments", localField:"_id", foreignField:"blogId", as:"blogComents"}},
    ], (err, data)=>{
        if(err){
            res.status(200).json({ "status": "fail", "data": err })
        } else{
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readSingleBlog = (req, res) => {
    blogModel.aggregate([
        {$match:{
            _id:ObjectId(req.params.id)
        }},
        {$lookup:{from:"blogcomments", localField:"_id", foreignField:"blogId", as:"blogComents"}},
    ], ((err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    }))
}

exports.updateBlog= (req, res) => {
    blogModel.updateOne({_id: req.params.id}, req.body, (err, data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteBlog = (req, res) => {
    blogModel.deleteOne({_id:req.params.id},(err,data)=>{
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


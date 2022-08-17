const AttorneyModel = require("../model/attorneyModel")
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
exports.createAttoreny = (req, res) => {
    AttorneyModel.create(req.body, (err, data) => {
        if (err) {
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readAttorneys = (req, res) => {
    AttorneyModel.aggregate([
        {
            $project: {
                _id: 1,
                email: 1,
                Name: 1,
                mobile: 1,
                title: 1,
                photo: 1,
                description: 1,
            }
        }
    ], (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}
exports.readSingleAttorney = (req, res) => {
    const attorneyId = req.params.id;
    console.log(attorneyId)
    AttorneyModel.aggregate([
        { $match: { _id:ObjectId(attorneyId)} },
        {
            $project:{ 
                _id: 1,
                email: 1,
                Name: 1,
                mobile: 1,
                title: 1,
                photo: 1,
                description: 1,
            }
        }
    ], (err, data) => {
        if(err){
            res.status(500).json({"status":"fail","data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
exports.updateAttorney = (req, res) => {
    const attorneyId = req.params.id;
    AttorneyModel.update({ _id: attorneyId }, req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteAttorney = (req, res) => {
    const attorneyId = req.params.id;
    AttorneyModel.deleteOne({ _id: attorneyId }, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


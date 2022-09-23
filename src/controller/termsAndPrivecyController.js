const termsAndConditionModel = require("../model/termsAndConditionModel")
const privacyModel = require("../model/privacyModel")

exports.createTerms = (req, res) => {
    termsAndConditionModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteTerms = (req, res) => {
    termsAndConditionModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readTerms = (req, res) => {
    termsAndConditionModel.aggregate([
        { $sort: { _id: -1 } },
        { $limit: 1 },
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.updateTerms = (req, res) => {
    termsAndConditionModel.updateOne({_id:req.params.id},req.body, (err, data)=>{
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data})
        }
    })
}


exports.createPrivacy = (req, res) => {
    privacyModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deletePrivacy = (req, res) => {
    privacyModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readPrivacy= (req, res) => {
    privacyModel.aggregate([
        { $sort: { _id: -1 } },
        { $limit: 1 },
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}
exports.updatePrivacy = (req, res) => {
    privacyModel.updateOne({_id:req.params.id},req.body, (err, data)=>{
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data})
        }
    })
}


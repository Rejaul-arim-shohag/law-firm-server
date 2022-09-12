const SlotModel = require("../model/slotModel")

exports.createSlot = (req, res) => {
    SlotModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readSlot = (req, res) => {
    SlotModel.aggregate([
        {
            $project: {
                _id: 1,
                slotTime:1
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
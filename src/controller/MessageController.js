const ContactModel = require("../model/contactModel");
exports.CreateMessage = (req, res) => {
    const postBody = {
        userEmail: req.headers.email,
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        subject: req.body.subject,
        message: req.body.message,

    }
    ContactModel.create(postBody, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fial", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readMessages = (req, res) => {
    ContactModel.aggregate([
        { $sort: { createDate: -1 } },
        {
            $project: {
                _id: 1,
                userEmail: 1,
                name: 1,
                email: 1,
                mobile: 1,
                subject: 1,
                message: 1,
                createDate: 1,
                status:1
            }
        }
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.updateMessage=(req, res)=>{
    const postBody = {
        status:req.body.status
    }
    ContactModel.updateOne({_id:req.params.id},postBody, (err, data)=>{
        if(err){
            res.status(500).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
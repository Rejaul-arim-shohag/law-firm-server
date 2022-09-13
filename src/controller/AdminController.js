var jwt = require('jsonwebtoken');
const adminModel = require('../model/adminModel');

exports.AdminRegistration = (req, res) => {
    adminModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}
exports.AdminLogin = (req, res) => {
    const reqBody = req.body;
    adminModel.aggregate([
        { $match: reqBody },
        {
            $project: {
                _id: 1,
                email: 1,
                fullName: 1,
                photo: 1,
            }
        }
    ], (err, data) => {
        if (err) {
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            if (data.length > 0) {
               
                const payloadData={email:data[0].email, _id:data[0]._id} 
                let Payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data:payloadData};  //data[0]
                let admintoken = jwt.sign(Payload, 'SecretAdmin123456789');
                res.status(200).json({ "status": "success", "admintoken": admintoken, "data": data[0] })
            } else {
                res.status(201).json({ "status": "unauthorized" })
            }
        }
    })
}

exports.AdminProfileDetails = (req, res) => {
    let email = req.headers.email;
    adminModel.aggregate([
        { $match: { email: email } },
        { $project: { _id: 1, email: 1, photo: 1, } }
    ], (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        }
        else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}

exports.updateAdminProfile = async (req, res) => {
    const email = req.headers.email;
    const { password, newPassword, photo } = req.body;
    const NewData = {
        password: newPassword,
        photo: photo
    }
    let searchQuery = { $and: [{ password: password }, { email: email }] }
    adminModel.aggregate([
        { $match: searchQuery }
    ], (err, data) => {
        if (err) {
            res.status(404).json({ "status": "fail", "data": err })
        }
        else {
            if (data.length > 0){
                adminModel.updateOne(searchQuery, NewData, (err, data) => {
                    if (err) {
                        res.status(500).json({ "status": "fail", "data": err })
                    } else {
                        res.status(200).json({ "status": "success", "data": data })
                    }
                })
            }
            else {
                res.status(404).json({ "status": "fail", "data": "incorrect previous password" })
            }

        }
    })
}

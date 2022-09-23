var jwt = require('jsonwebtoken');
const adminModel = require('../model/adminModel');
const OTPModel = require("../model/OTPSModel");
const SendEmailUtility = require("../utility/SendEmailUtility");

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


//forget password option addd
exports.RecoverVerifyEmail=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)
    try {
        // Email Account Query
        let UserCount = (await adminModel.aggregate([{$match: {email: email}}, {$count: "total"}]))
        if(UserCount.length>0){
            // OTP Insert
            let CreateOTP = await OTPModel.create({email: email, otp: OTPCode})
            // Email Send
            let SendEmail = await SendEmailUtility(email,"Your PIN Code is= "+OTPCode,"Task Manager PIN Verification")
            res.status(200).json({status: "success", data: SendEmail})
        }
        else{
            res.status(200).json({status: "fail", data: "No User Found"})
        }

    }catch (e) {
        res.status(200).json({status: "fail", data:e})
    }

}

exports.RecoverVerifyOTP=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = req.params.otp;
    let status=0;
    let statusUpdate=1;
    try {
        let OTPCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}}, {$count: "total"}])
        if (OTPCount.length>0) {
            let OTPUpdate = await OTPModel.updateOne({email: email, otp: OTPCode, status: status}, {
                email: email,
                otp: OTPCode,
                status: statusUpdate
            })
            res.status(200).json({status: "success", data: OTPUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid OTP Code"})
        }
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}


exports.RecoverResetPass=async (req,res)=>{
    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    try {
        let OTPUsedCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {
            let PassUpdate = await UsersModel.updateOne({email: email}, {
                password: NewPass
            })
            res.status(200).json({status: "success", data: PassUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid Request"})
        }
    }
    catch (e) {
        res.status(200).json({status: "fail", data:e})
    }
}
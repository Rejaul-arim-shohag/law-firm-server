const UserModel = require ("../model/userModel");
var jwt = require('jsonwebtoken');

exports.userRegistration =(req, res)=>{
    UserModel.create(req.body, (err,data)=>{
        if(err){
            res.status(200).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.login=(req, res)=>{
    const reqBody = req.body;
    UserModel.aggregate([
        {$match:reqBody},
        {$project:{
            _id:1,
            email:1,
            fullName:1,
            mobile:1,
            photo:1,
        }}
    ], (err, data)=>{
        if(err){
            res.status(400).json({"status":"fail", "data":err})
        } else{
            if(data.length>0){
    
                let Payload={exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]["email"]};
                let token = jwt.sign( Payload,'SecretKey123456789');
                res.status(200).json({"status":"success", "userToken":token, "data":data[0]})
            } else{
                res.status(201).json({"status":"unauthorized"})
            }
        }
    })
}

exports.profileUpdate=(req, res)=>{
    const email = req.headers['email'];
    const reqBody =req.body;
    UserModel.updateOne({email:email}, reqBody, (err,data)=>{
        if(err){
            res.status(400).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })
}
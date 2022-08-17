var jwt = require('jsonwebtoken');
module.exports=(req, res, next)=>{
    let token = req.headers["userToken"];
    jwt.verify(token,"SecretKey123456789",(err, decoded)=>{
        if(err){
            res.status(401).json({status:"unauthorized"})
        } else{
            let email=decoded['data'];
            // console.log(email)
            req.headers.email=email
            next();
        }
    })
}

//https://themexbd.com/poket/autocar/
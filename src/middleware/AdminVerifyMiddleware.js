var jwt = require('jsonwebtoken');
module.exports=(req, res, next)=>{
    let adminToken = req.headers.admintoken;
    jwt.verify(adminToken,"SecretAdmin123456789",(err, decoded)=>{
        if(err){
            res.status(401).json({status:"unauthorized"})
        } else{
            let email=decoded['data'];
            req.headers.email=email
            next();
        }
    })
}
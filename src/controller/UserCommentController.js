const commentModel = require("../model/userCommentModel")
const UserModel = require("../model/userModel");

exports.createUserComment = (req, res) => {
    const reqBody = req.body;
    commentModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.listCommentByStatus = (req, res) => {
    const status = req.params.status;
    commentModel.aggregate([
        { $match: { status: status } },
        { $sort : { createDate : -1 } },
        {
            $project: {
                _id: 1,
                status:1,
                email: 1,
                name: 1,
                comment: 1
            }
        }
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({"status":"success", "data":data})
        }
    })
}

exports.updateCommentStatus=(req, res)=>{
    const id=req.params.id;
    let status= req.params.status;
    const query={ _id:id}
    const reqBody={status:status}
    commentModel.updateOne(query,reqBody,(err, data)=>{
        if(err){
            res.status(400).json({"status":"fail", "data":err})
        } else{
            res.status(200).json({"status":"success", "data":data})
        }
    })

}

exports.deleteComment = (req, res) => {
    const commentId = req.params.id;
    commentModel.deleteOne({ _id: commentId }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}
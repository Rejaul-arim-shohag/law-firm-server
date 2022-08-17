const AppointmentServicesModel = require("../model/appointmentServicesModel")
exports.AddAppointmentService = (req, res) => {
    AppointmentServicesModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readAppointmentService = (req, res) => {
    AppointmentServicesModel.aggregate([
        {$lookup:{from:"slots", localField:"ServiceID",foreignField:"ServiceID", as:"Slots"}},
        {
            $project: {
                _id: 0,
                ServiceID:1,
                serviceName: 1,
                serviceFee: 1,
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

exports.updateAppointmentService = (req, res) => {
    const ServiceID = req.params.ServiceID;
    AppointmentServicesModel.update({ServiceID:ServiceID},req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.DeleteAppointmentService = (req, res) => {
    const ServiceID = req.params.ServiceID;
    AppointmentServicesModel.deleteOne({ServiceID:ServiceID}, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}
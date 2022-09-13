const AppointmentModel = require("../model/appointmentModel")
exports.createAppointment = (req, res) => {
    AppointmentModel.create(req.body, (err, data) => {
        if (err) {
            res.status(200).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.readAppointment = async (req, res) => {
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.parPage);
        let status = req.params.status
        let searchingDate = req.body["SearchDate"];
        let skipRow = (pageNo - 1) * perPage;
        let data;
        if (searchingDate !== "0" && status !== "0") {
            let searchQuery = { apointmentDate: searchingDate, status:status}
            data = await AppointmentModel.aggregate([{
                $facet: {
                    total: [{ $match: searchQuery }, { $count: "count" }],
                    Rows: [{ $match: searchQuery }, { $skip: skipRow }, { $limit: perPage }]
                }
            }])
        }
        else if (status === "0" && searchingDate === "0") {

            data = await AppointmentModel.aggregate([{
                $facet: {
                    total: [{ $count: "count" }],
                    Rows: [{ $skip: skipRow }, { $limit: perPage }]
                }
            }])
        }
        else if (status !== "0" && searchingDate === "0"){
           
            let searchQuery = { status: status }
            data = await AppointmentModel.aggregate([{
                $facet: {
                    total: [{ $match: searchQuery }, { $count: "count" }],
                    Rows: [{ $match: searchQuery }, { $skip: skipRow }, { $limit: perPage }],
                }
            }])
        }
         else if(status === "0" && searchingDate !== "0"){ 
            let searchQuery = { apointmentDate: searchingDate }
            data = await AppointmentModel.aggregate([{
                $facet: {
                    total: [{ $match: searchQuery }, { $count: "count" }],
                    Rows: [{ $match: searchQuery }, { $skip: skipRow }, { $limit: perPage }],
                }
            }])
        }
        res.status(200).json({ status: "success", data })
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ status: "fail", error: e })
    }
}

exports.readAppointmentList = (req, res) => {
    const status = req.params.status;
    AppointmentModel.aggregate([
        { $match: { status: status } },
        {
            $project: {
                _id: 1,
                name: 1,
                email: 1,
                phone: 1,
                serviceName: 1,
                slot: 1,
                apointmentDate: 1,
                status: 1,
            }
        }
    ], (err, data) => {
        if (err) {
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.updateAppointment = (req, res) => {
    const id = req.params.id;
    const reqBody = req.body;
    AppointmentModel.updateOne({ _id: id }, reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteAppointment = (req, res) => {
    const id = req.params.id;
    AppointmentModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


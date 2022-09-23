const LogoModel = require("../model/logoModel");
const HeroImageModel = require("../model/heroImageModel");
const AddressModel = require("../model/addressModel");
const heroContentModel = require("../model/heroTitleModel")
exports.insertLogo = (req, res) => {
    LogoModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteLogo = (req, res) => {
    LogoModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.findLogo = (req, res) => {
    LogoModel.aggregate([
        { $sort: { _id: -1 } },
        { $limit: 1 },
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.insertHeroImage = (req, res) => {
    HeroImageModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteHeroImage = (req, res) => {
    HeroImageModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.findHeroImage = (req, res) => {
    HeroImageModel.aggregate([
        { $sort: { _id: -1 } },
        { $limit: 1 },
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}



exports.insertAddress = (req, res) => {
    AddressModel.create(req.body, (err, data) => {
        console.log(req.body)
        if (err) {
            console.log(err)
            res.status(400).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteAddress = (req, res) => {
    AddressModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.updateAddress = (req, res) => {
    AddressModel.updateOne({ _id: req.params.id }, req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.FindAddress = (req, res) => {
    AddressModel.aggregate([
        { $sort: { _id: -1 } },
        { $limit: 1 },
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}


exports.insertHeroContent = (req, res) => {
    heroContentModel.create(req.body, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.deleteHeroContent = (req, res) => {
    heroContentModel.deleteOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}

exports.findHeroContent = (req, res) => {
    heroContentModel.aggregate([
        { $sort: { _id: -1 } },
        { $limit: 1 },
    ], (err, data) => {
        if (err) {
            res.status(500).json({ "status": "fail", "data": err })
        } else {
            res.status(200).json({ "status": "success", "data": data })
        }
    })
}





const Service = require("../models/ServiceModel");

// Add New Service/
exports.addService = async (req, res) => { 
    try {
        if (!req.file) 
            return res.status(400).json({ success: false, error: "No image uploaded" });

        const service = new Service({
            title: req.body.title,
            description: req.body.description,
            img: req.file.filename
        });

        await service.save();
        res.status(201).json({
             success: true,
              msg: "Service Added Successfully", 
              data: service 
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
};

// Get All Services
exports.getServices = async (req, res) => {
    try {
        const data = await Service.find();
        res.status(200).json({ 
            success: true,
             data 
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({
             success: false,
              error: error.message
             });
    }
};

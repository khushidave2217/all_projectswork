const express = require("express");
const router = express.Router();
const multer = require("multer");
const { addService, getServices } = require("../Controllers/ServiceController");

const storage = multer.diskStorage({
    destination: "public/uploads",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// Add Service (POST)
router.post("/addservice", upload.single("img"), addService);


// Get Service (GET)
router.get("/getservices", getServices);

module.exports = router;

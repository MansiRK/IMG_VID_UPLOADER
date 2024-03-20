const uploadController = require("../controller/uploadController");
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Set up multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//Routes
router.post("/image", upload.single("file"), uploadController.uploadImage);

router.post("/video", upload.single("file"), uploadController.uploadVideo);


module.exports = router;

const uploadController = require("../controller/uploadController");
const express = require("express");
const router = express.Router();

router.post("/image", uploadController.uploadImage);

router.post("/video", uploadController.uploadVideo);

module.exports = router;

const UploadModel = require("../model/uploadModel");
const dotenv = require("dotenv");

dotenv.config();

// Uploading Image
const uploadImage = async (req, res) => {
  try {
    console.log(req.file);

    //Check image file uploaded or not
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const file = req.file;

    // Create a new instance
    const newUploadImage = new UploadModel({
      fileName: file.originalname,
      contentType: file.mimetype,
      size: file.size,
      type: "image",
      // createdAt: new Date(),
    });

    // Saving image
    await newUploadImage.save();

    // Response when successful
    return res.status(200).json({
      message: "Image uploaded successfully",
    });
  } catch (error) {
    //Response when failed
    res.status(400).json({
      message: "Image not uploaded due to error",
      error: JSON.stringify(error),
    });
  }
};

// Uploading video
const uploadVideo = async (req, res) => {
  try {
    console.log(req.file);

    //Check video file uploaded or not
    if (!req.file) {
      return res.status(400).json({
        message: "No video uploaded",
      });
    }

    const file = req.file;

    // Create a new instance
    const newUploadVideo = new UploadModel({
      fileName: file.originalname,
      contentType: file.mimetype,
      size: file.size,
      type: "video",
      // createdAt: new Date(),
    });

    await newUploadVideo.save();

    // Response when successful
    return res.status(200).json({
      message: "Video uploaded successfully",
    });
  } catch (error) {
    //Response when failed
    res.status(400).json({
      message: "Video not uploaded due to error",
      error: error.message,
    });
  }
};

module.exports = {
  uploadImage,
  uploadVideo,
};

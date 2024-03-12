const UploadModel = require("../model/uploadModel");
// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");
const dotenv = require("dotenv");

// // Configure multer
// const storage = multer.memoryStorage(); // Use memory storage to handle file uploads
// const upload = multer({ storage: storage });

dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

const uploadImage = async (req, res) => {
  try {
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const file = req.file;

    // const uploadResult = await cloudinary.uploader.upload(
    //   file.buffer.toString("base64"),
    //   {
    //     upload_preset: process.env.UPLOAD_PRESET,
    //   }
    // );

    const newUploadImage = new UploadModel({
      // cloudinaryID: file.public_id,
      contentType: file.mimetype,
      size: file.size,
      type: "image",
    });

    await newUploadImage.save();

    return res.status(200).json({
      message: "Image uploaded successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Image not uploaded due to error",
      error: JSON.stringify(error),
    });
  }
};

const uploadVideo = async (req, res) => {
  try {
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({
        message: "No video uploaded",
      });
    }

    const file = req.file;

    // const uploadResult = await cloudinary.uploader.upload(
    //   file.buffer.toString("base64"),
    //   {
    //     upload_preset: process.env.UPLOAD_PRESET,
    //     resource_type: "video",
    //   }
    // );

    const newUploadVideo = new UploadModel({
      // cloudinaryID: file.public_id,
      contentType: file.mimetype,
      size: file.size,
      type: "video",
    });

    await newUploadVideo.save();

    return res.status(200).json({
      message: "Video uploaded successfully",
    });
  } catch (error) {
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

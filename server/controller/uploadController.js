const UploadModel = require("../model/uploadModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadImage = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const file = req.files.file;

    const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
      upload_preset: process.env.UPLOAD_PRESET,
    });

    const newUploadImage = new UploadModel({
      cloudinaryID: uploadResult.public_id,
      contentType: uploadResult.mimetype,
      size: file.size,
      type: "image",
    });

    await newUploadImage.save();

    return res.status(200).json({
      message: "Image uploaded successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Image not uploaded due to error: ",
      error,
    });
  }
};

const uploadVideo = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "No video uploaded",
      });
    }

    const file = req.files.file;

    const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
      upload_preset: process.env.UPLOAD_PRESET,
      resource_type: "video",
    });

    const newUploadVideo = new UploadModel({
      cloudinaryID: uploadResult.public_id,
      contentType: uploadResult.mimetype,
      size: file.size,
      type: "video",
    });

    await newUploadVideo.save();

    return res.status(200).json({
      message: "Video uploaded successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Video not uploaded due to error: ",
      error,
    });
  }
};

module.exports = {
  uploadImage,
  uploadVideo,
};

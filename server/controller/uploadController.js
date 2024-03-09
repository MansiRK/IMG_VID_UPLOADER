const UploadModel = require("../model/uploadModel");

const uploadImage = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    const file = req.files.file;
  } catch (error) {}
};

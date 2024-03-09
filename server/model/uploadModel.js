const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  cloudinaryID: String,
  contentType: String,
  size: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UploadModel = mongoose.model("Upload", uploadSchema);

module.exports = UploadModel;

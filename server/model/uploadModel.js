const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  fileName: String,
  contentType: String,
  size: Number,
  type: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UploadModel = mongoose.model("FileUpload", uploadSchema);

module.exports = UploadModel;

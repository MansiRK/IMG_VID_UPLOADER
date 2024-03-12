const mongoose = require("mongoose");

// Creating schema
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

// Creating model
const UploadModel = mongoose.model("FileUpload", uploadSchema);

module.exports = UploadModel;

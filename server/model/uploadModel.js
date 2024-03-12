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

const UploadModel = mongoose.model("Upload", uploadSchema);

module.exports = UploadModel;

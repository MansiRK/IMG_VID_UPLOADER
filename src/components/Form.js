// Form.js
import React from "react";
import "../style/style.css";

const Form = () => {
  const handleUploadImage = (event) => {};

  const handleUploadVideo = (event) => {};

  return (
    <div className="formContent">
      <div className="file-container">
        <h3 className="file-label">Upload Images</h3>
        <label htmlFor="image-upload" className="custom-button">
          Choose File
        </label>
        <input
          type="file"
          id="image-upload"
          className="input-file"
          accept="image/*"
          onChange={handleUploadImage}
        />
        <span className="file-name">No file chosen</span>
      </div>
      <div className="file-container">
        <h3 className="file-label">Upload Videos</h3>
        <label htmlFor="video-upload" className="custom-button">
          Choose File
        </label>
        <input
          type="file"
          id="video-upload"
          className="input-file"
          accept="video/*"
          onChange={handleUploadVideo}
        />
        <span className="file-name">No file chosen</span>
      </div>
    </div>
  );
};

export default Form;

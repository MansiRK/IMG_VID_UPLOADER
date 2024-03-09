// Form.js
import React, { useState, useRef, useEffect } from "react";
import "../style/style.css";

const Form = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const videoRef = useRef(null);

  const handleUploadImage = (event) => {
    event.stopPropagation(); // Stop the event from propagating
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      setImage(file);
      event.target.disabled = true; // Disable the file input
    };
    input.click();
  };

  const handleUploadVideo = (event) => {
    event.stopPropagation(); // Stop the event from propagating
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      setVideo(file);
      event.target.disabled = true; // Disable the file input
    };
    input.click();
  };

  return (
    <div>
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
            onClick={handleUploadImage}
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
            onClick={handleUploadVideo}
          />
          <span className="file-name">No file chosen</span>
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import "../style/style.css";
import MediaDisplay from "./MediaDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { uploadImage, uploadVideo } from "../uploadFunction";

const Form = () => {
  const [image, setImage] = useState({
    file: null,
    fileName: "No file chosen",
  });
  const [video, setVideo] = useState({
    file: null,
    fileName: "No file chosen",
  });

  const handleUploadImage = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];
    setImage({ file: file, fileName: file ? file.name : "No file chosen" });
    uploadImage(file);
    fileInput.value = null;
  };

  const handleUploadVideo = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];
    setVideo({ file: file, fileName: file ? file.name : "No file chosen" });
    uploadVideo(file);
    fileInput.value = null;
  };

  const handleMediaClose = () => {
    setImage({ file: null, fileName: "No file chosen" });
    setVideo({ file: null, fileName: "No file chosen" });
  };

  return (
    <div>
      <div className="formContent">
        <div className="form-content-sm">
          <div className="file-container ">
            <h3 className="file-label">Upload Images</h3>
            <label htmlFor="image-upload" className="custom-button">
              <FontAwesomeIcon className="icon" icon={faUpload} /> Choose File
            </label>
            <input
              type="file"
              id="image-upload"
              className="input-file"
              accept="image/*"
              onChange={handleUploadImage}
            />
            <span className="file-name">{image.fileName}</span>
          </div>
          <div className="file-container">
            <h3 className="file-label">Upload Videos</h3>
            <label htmlFor="video-upload" className="custom-button">
              <FontAwesomeIcon className="icon" icon={faUpload} /> Choose File
            </label>
            <input
              type="file"
              id="video-upload"
              className="input-file"
              accept="video/*"
              onChange={handleUploadVideo}
            />
            <span className="file-name">{video.fileName}</span>
          </div>
        </div>
      </div>
      <MediaDisplay
        image={image.file}
        video={video.file}
        onClose={handleMediaClose}
      />
    </div>
  );
};

export default Form;

import React, { useState, useRef, useEffect } from "react";
import "../style/style.css";
import MediaDisplay from "./MediaDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { uploadImage, uploadVideo } from "../uploadFunction";

const Form = () => {
  // State variables for image and video
  const [image, setImage] = useState({
    file: null,
    fileName: "No file chosen",
  });
  const [video, setVideo] = useState({
    file: null,
    fileName: "No file chosen",
  });

  // Reference to scroll to media display section
  const mediaRef = useRef(null);

  // Function to handle image and video upload
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

  // Effect to scroll to media display when needed
  useEffect(() => {
    if (mediaRef.current) {
      mediaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [image, video]);

  return (
    <div>
      <div className="form-content">
        <div className="form-content-sm">
          <div className="file-container ">
            <h3 className="file-label">Upload Image</h3>
            <label htmlFor="image-upload" className="upload-button">
              <FontAwesomeIcon className="upload-icon" icon={faUpload} /> Choose
              File
            </label>
            <input
              type="file"
              id="image-upload"
              className="input-file"
              accept="image/*"
              onChange={handleUploadImage}
            />
            <p className="file-name">{image.fileName}</p>
          </div>
          <div className="file-container">
            <h3 className="file-label">Upload Video</h3>
            <label htmlFor="video-upload" className="upload-button">
              <FontAwesomeIcon className="upload-icon" icon={faUpload} /> Choose
              File
            </label>
            <input
              type="file"
              id="video-upload"
              className="input-file"
              accept="video/*"
              onChange={handleUploadVideo}
            />
            <p className="file-name">{video.fileName}</p>
          </div>
        </div>
      </div>
      {/* Media Display Section */}
      <div ref={mediaRef}></div>
      <MediaDisplay
        image={image.file}
        video={video.file}
        onClose={handleMediaClose}
      />
    </div>
  );
};

export default Form;

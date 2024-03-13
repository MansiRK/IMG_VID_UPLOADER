import React, { useEffect, useRef, useState } from "react";
import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MediaDisplay = ({ image, video, onClose }) => {
  // State to track visibility of the video element
  const [isVisible, setIsVisible] = useState(false);

  // Reference to the video element
  const videoRef = useRef(null);

  // Effect to handle scrolling and update visibility of video element
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInViewportVertical =
          rect.top >= 0 && rect.bottom <= window.innerHeight;
        const isInViewportHorizontal =
          rect.left >= 0 && rect.right <= window.innerWidth;
        const isFullyVisible = isInViewportVertical && isInViewportHorizontal;
        setIsVisible(isFullyVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to play/pause video based on visibility
  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
    } else if (!isVisible && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  // Function to handle close button click
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="upload-container">
      {/* Render uploaded image */}
      {image && (
        <>
          <h4 className="file-text">Uploaded Image</h4>
          <div className="uploaded-image">
            <button className="close-button" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
          </div>
        </>
      )}

      {/* Render uploaded video */}
      {video && (
        <>
          <h4>Uploaded Video</h4>
          <div className="uploaded-video">
            <button className="close-button" onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <video ref={videoRef} controls loop muted autoPlay={isVisible}>
              <source src={URL.createObjectURL(video)} type={video.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
    </div>
  );
};

export default MediaDisplay;

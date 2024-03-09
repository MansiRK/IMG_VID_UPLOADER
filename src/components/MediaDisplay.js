import React, { useState, useRef, useEffect } from "react";

const MediaDisplay = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleVideoScroll);
    return () => {
      window.removeEventListener("scroll", handleVideoScroll);
    };
  }, []);

  const handleVideoScroll = () => {
    if (videoRef.current) {
      const isInViewport = isElementInViewport(videoRef.current);
      if (isInViewport && videoRef.current.paused) {
        videoRef.current.play();
      } else if (!isInViewport && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  const handleImageClose = () => {
    setImage(null);
  };

  const handleVideoClose = () => {
    setVideo(null);
  };

  return (
    <div className="upload-container">
      {/* Display uploaded image */}
      {image && (
        <div className="uploaded-image">
          <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
          <button onClick={handleImageClose}>Close</button>
        </div>
      )}
      {/* Display uploaded video */}
      {video && (
        <div className="uploaded-video">
          <video ref={videoRef} controls loop onScroll={handleVideoScroll}>
            <source src={URL.createObjectURL(video)} type={video.type} />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleVideoClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MediaDisplay;

// import React, { useEffect, useRef, useState } from "react";
// import "../style/style.css";

// const MediaDisplay = ({ image, video, onClose }) => {
//   const [playing, setPlaying] = useState(false);

//   const [isVisible, setIsVisible] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (videoRef.current) {
//         const rect = videoRef.current.getBoundingClientRect();
//         const isInViewportVertical =
//           rect.top >= 0 && rect.bottom <= window.innerHeight;
//         const isInViewportHorizontal =
//           rect.left >= 0 && rect.right <= window.innerWidth;
//         const isFullyVisible = isInViewportVertical && isInViewportHorizontal;
//         setIsVisible(isFullyVisible);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [playing]);

//   useEffect(() => {
//     if (isVisible && !playing) {
//       videoRef.current.play();
//       setPlaying(true);
//     } else if (!isVisible && playing) {
//       videoRef.current.pause();
//       setPlaying(false);
//     }
//   }, [isVisible, playing]);

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="upload-container">
//       {image && (
//         <div className="uploaded-image">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
//         </div>
//       )}

//       {video && (
//         <div className="uploaded-video">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <video ref={videoRef} controls loop muted autoPlay={isVisible}>
//             <source src={URL.createObjectURL(video)} type={video.type} />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediaDisplay;

import React, { useEffect, useRef, useState } from "react";
import "../style/style.css";

const MediaDisplay = ({ image, video, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

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

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play();
    } else if (!isVisible && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="upload-container">
      {image && (
        <div className="uploaded-image">
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
          <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
        </div>
      )}

      {video && (
        <div className="uploaded-video">
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
          <video ref={videoRef} controls loop muted autoPlay={isVisible}>
            <source src={URL.createObjectURL(video)} type={video.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default MediaDisplay;

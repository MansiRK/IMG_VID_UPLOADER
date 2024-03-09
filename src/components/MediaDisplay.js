// import React, { useRef, useEffect, useState } from "react";
// import "../style/style.css";

// const MediaDisplay = ({ image, video, onClose }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     window.addEventListener("scroll", handleVideoScroll);
//     return () => {
//       window.removeEventListener("scroll", handleVideoScroll);
//     };
//   }, []);

//   const handleVideoScroll = () => {
//     if (videoRef.current) {
//       const isInViewport = isElementInViewport(videoRef.current);
//       if (isInViewport && videoRef.current.paused) {
//         videoRef.current.play();
//       } else if (!isInViewport && !videoRef.current.paused) {
//         videoRef.current.pause();
//       }
//     }
//   };

//   const isElementInViewport = (el) => {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="upload-container">
//       {/* Display uploaded image */}
//       {image && (
//         <div className="uploaded-image">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
//         </div>
//       )}
//       {/* Display uploaded video */}
//       {video && (
//         <div className="uploaded-video">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <video
//             ref={videoRef}
//             controls
//             loop
//             muted
//             onScroll={handleVideoScroll}
//           >
//             <source src={URL.createObjectURL(video)} type={video.type} />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediaDisplay;

// import React, { useRef, useEffect, useState } from "react";
// import "../style/style.css";

// const MediaDisplay = ({ image, video, onClose }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     if (!videoElement) return;
//     const handleScroll = () => {
//       if (isInViewport(videoElement) && videoElement.paused) {
//         videoElement.play();
//       } else if (!isInViewport(videoElement) && !videoElement.paused) {
//         videoElement.pause();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const isInViewport = (element) => {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="upload-container">
//       {/* Display uploaded image */}
//       {image && (
//         <div className="uploaded-image">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
//         </div>
//       )}
//       {/* Display uploaded video */}
//       {video && (
//         <div className="uploaded-video">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <video ref={videoRef} controls loop muted>
//             <source src={URL.createObjectURL(video)} type={video.type} />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediaDisplay;

// import React, { useEffect, useRef, useState } from "react";
// import "../style/style.css";

// const MediaDisplay = ({ image, video, onClose }) => {
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const rect = videoRef.current.getBoundingClientRect();
//       const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
//       const isFullyVisible =
//         isInViewport && rect.top >= 0 && rect.bottom <= window.innerHeight;

//       if (isFullyVisible && !playing) {
//         setPlaying(true);
//       } else if (!isFullyVisible && playing) {
//         setPlaying(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [playing]);

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="upload-container">
//       {/* Display uploaded image */}
//       {image && (
//         <div className="uploaded-image">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
//         </div>
//       )}
//       {/* Display uploaded video */}
//       {video && (
//         <div className="uploaded-video">
//           <button className="close-button" onClick={handleClose}>
//             Close
//           </button>
//           <video ref={videoRef} controls loop muted autoPlay={playing}>
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
  const [playing, setPlaying] = useState(false);

  const [isVisible, setIsVisible] = useState(false); // Track if the media is visible in the viewport
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
        // console.log(setIsVisible);
        console.log(isVisible);
        // if (isFullyVisible && !playing) {
        //   videoRef.current.play();
        //   setPlaying(true);
        // } else if (!isFullyVisible && playing) {
        //   videoRef.current.pause();
        //   setPlaying(false);
        // }
      }
    };

    // if (videoRef.current) {
    window.addEventListener("scroll", handleScroll);
    // }

    return () => {
      //   if (videoRef.current) {
      window.removeEventListener("scroll", handleScroll);
      //   }
    };
  }, [playing]);

  useEffect(() => {
    if (isVisible && !playing) {
      videoRef.current.play();
      setPlaying(true);
    } else if (!isVisible && playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isVisible, playing]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="upload-container">
      {/* Display uploaded image */}
      {image && (
        <div className="uploaded-image">
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
          <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
        </div>
      )}
      {/* Display uploaded video */}
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

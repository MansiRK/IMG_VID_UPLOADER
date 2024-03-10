// import React, { useState } from "react";
// import "../style/style.css";
// import MediaDisplay from "./MediaDisplay";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpload } from "@fortawesome/free-solid-svg-icons";
// import { uploadImage, uploadVideo } from "../uploadFunction";

// const Form = () => {
//   const [image, setImage] = useState({
//     file: null,
//     fileName: "No file chosen",
//   });
//   const [video, setVideo] = useState({
//     file: null,
//     fileName: "No file chosen",
//   });

//   const handleUploadImage = (event) => {
//     const fileInput = event.target;
//     const file = fileInput.files[0];
//     setImage({ file: file, fileName: file ? file.name : "No file chosen" });
//     fileInput.value = null; // Clear the file input value
//   };

//   const handleUploadVideo = (event) => {
//     const fileInput = event.target;
//     const file = fileInput.files[0];
//     setVideo({ file: file, fileName: file ? file.name : "No file chosen" });
//     fileInput.value = null; // Clear the file input value
//   };

//   const handleMediaClose = () => {
//     setImage({ file: null, fileName: "No file chosen" });
//     setVideo({ file: null, fileName: "No file chosen" });
//   };

//   return (
//     <div>
//       <div className="formContent">
//         <div className="form-content-sm">
//           <div className="file-container ">
//             <h3 className="file-label">Upload Images</h3>
//             <label htmlFor="image-upload" className="custom-button">
//               <FontAwesomeIcon className="icon" icon={faUpload} /> Choose File
//             </label>
//             <input
//               type="file"
//               id="image-upload"
//               className="input-file"
//               accept="image/*"
//               onChange={handleUploadImage}
//             />
//             <span className="file-name">{image.fileName}</span>
//           </div>
//           <div className="file-container">
//             <h3 className="file-label">Upload Videos</h3>
//             <label htmlFor="video-upload" className="custom-button">
//               <FontAwesomeIcon className="icon" icon={faUpload} /> Choose File
//             </label>
//             <input
//               type="file"
//               id="video-upload"
//               className="input-file"
//               accept="video/*"
//               onChange={handleUploadVideo}
//             />
//             <span className="file-name">{video.fileName}</span>
//           </div>
//         </div>
//       </div>
//       <MediaDisplay
//         image={image.file}
//         video={video.file}
//         onClose={handleMediaClose}
//       />
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import "../style/style.css";
import MediaDisplay from "./MediaDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { uploadImage, uploadVideo } from "../uploadFunction";
import { CloudinaryContext } from "cloudinary-react";
import { cloudinaryConfig } from "../cloudinaryConfig";

const Form = () => {
  const [image, setImage] = useState({
    file: null,
    fileName: "No file chosen",
  });
  const [video, setVideo] = useState({
    file: null,
    fileName: "No file chosen",
  });

  const handleUpload = (resultEvent) => {
    if (resultEvent.event === "success") {
      const publicId = resultEvent.info.public_id;
      console.log("File uploaded successfully. Public ID:", publicId);
    }
  };

  const handleUploadImage = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];
    setImage({ file: file, fileName: file ? file.name : "No file chosen" });
    uploadImage(file); // Call uploadImage function when an image is selected
    fileInput.value = null; // Clear the file input value
  };

  const handleUploadVideo = (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];
    setVideo({ file: file, fileName: file ? file.name : "No file chosen" });
    uploadVideo(file); // Call uploadVideo function when a video is selected
    fileInput.value = null; // Clear the file input value
  };

  const handleMediaClose = () => {
    setImage({ file: null, fileName: "No file chosen" });
    setVideo({ file: null, fileName: "No file chosen" });
  };

  return (
    <div>
      <CloudinaryContext cloudName={cloudinaryConfig.cloudName}>
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
      </CloudinaryContext>

      <MediaDisplay
        image={image.file}
        video={video.file}
        onClose={handleMediaClose}
      />
    </div>
  );
};

export default Form;

import axios from "axios";

// const serverURL = "https://img-vid-uploader-gaj0.onrender.com";

// Function to upload an image file
const uploadImage = async (file) => {
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("file", file);

    //Send a POST request
    const response = await axios.post(`/api/image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Response when successful
    console.log(response.data.message);
  } catch (error) {
    // Response when successful
    console.error("Error uploading image:", error);
  }
};

// Function to upload an video file
const uploadVideo = async (file) => {
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("file", file);

    //Send a POST request
    const response = await axios.post(`/api/video`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // Response when successful
    console.log(response.data.message);
  } catch (error) {
    // Response when successful
    console.error("Error uploading video:", error);
  }
};

export { uploadImage, uploadVideo };

import axios from "axios";

const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/api/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data.message);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

const uploadVideo = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("/api/video", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data.message);
  } catch (error) {
    console.error("Error uploading video:", error);
  }
};

export { uploadImage, uploadVideo };

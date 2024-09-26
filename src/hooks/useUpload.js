import axios from "axios";

export const useUpload = async ({ image }) => {
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "raven_tutorials");
      formData.append("api_key", "554823718745177");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
      };

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxli2mlbq/image/upload",
        
          formData,
          config,
        
      );

      const data = await res.data;
      if (!data) throw new Error("Failed to upload image");

      return {
        url: data.secure_url,
        public_id: data.public_id,
      };
    } catch (error) {
      return error.message;
    }
  };

  const { url, public_id } = await upload();
  return { url, public_id }
};

const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDINAIRE,
  api_secret: process.env.API_SECRET_CLOUDINAIRE,
});

const cloudinaryUploadImg = async (fileUpload) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      fileUpload,
      (result) => {
        resolve({ url: result.secure_url });
      },
      {
        resource_type: "auto",
      }
    );
  });
};

module.exports = cloudinaryUploadImg;

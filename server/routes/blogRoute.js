const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImagesBlog,
} = require("../controller/blogControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImage");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);

router.put(
  "/upload-image/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImagesBlog
);

router.put("/like", authMiddleware, likeBlog);

router.put("/dislike", authMiddleware, dislikeBlog);

router.put("/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);

router.get("/", getAllBlogs);

router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;

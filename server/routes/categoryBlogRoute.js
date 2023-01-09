const express = require("express");
const {
  createCategoryBlog,
  updateCategoryBlog,
  deleteCategoryBlog,
  getCategoryBlog,
  getAllCategoryBlog,
} = require("../controller/categoryBlogControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategoryBlog);

router.put("/:id", authMiddleware, isAdmin, updateCategoryBlog);

router.delete("/:id", authMiddleware, isAdmin, deleteCategoryBlog);

router.get("/:id", getCategoryBlog);

router.get("/", getAllCategoryBlog);

module.exports = router;

const express = require("express");
const {
  createCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
  getCategoryProduct,
  getAllCategoryProduct,
} = require("../controller/categoryProductControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createCategoryProduct);

router.put("/:id", authMiddleware, isAdmin, updateCategoryProduct);

router.delete("/:id", authMiddleware, isAdmin, deleteCategoryProduct);

router.get("/:id", getCategoryProduct);

router.get("/", getAllCategoryProduct);

module.exports = router;

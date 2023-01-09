const CategoryBlog = require("../models/categoryBlogModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a new category
const createCategoryBlog = asyncHandler(async (req, res) => {
  try {
    const createCategoryBlog = await CategoryBlog.create(req.body);
    res.json(createCategoryBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a CategoryBlog
const updateCategoryBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCategoryBlog = await CategoryBlog.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updateCategoryBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a CategoryBlog
const deleteCategoryBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteCategoryBlog = await CategoryBlog.findByIdAndDelete(id);
    res.json("Delete Completed");
  } catch (error) {
    throw new Error(error);
  }
});

// Get a CategoryBlog
const getCategoryBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCategoryBlog = await CategoryBlog.findById(id);
    res.json(getCategoryBlog);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all CategoryBlog
const getAllCategoryBlog = asyncHandler(async (req, res) => {
  try {
    const getAllCategoryBlog = await CategoryBlog.find();
    res.json(getAllCategoryBlog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategoryBlog,
  updateCategoryBlog,
  deleteCategoryBlog,
  getCategoryBlog,
  getAllCategoryBlog,
};

const CategoryProduct = require("../models/categoryProductModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a new category Product
const createCategoryProduct = asyncHandler(async (req, res) => {
  try {
    const createCategoryProduct = await CategoryProduct.create(req.body);
    res.json(createCategoryProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Category Product
const updateCategoryProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCategoryProduct = await CategoryProduct.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updateCategoryProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a CategoryProduct
const deleteCategoryProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteCategoryProduct = await CategoryProduct.findByIdAndDelete(id);
    res.json("Delete Completed");
  } catch (error) {
    throw new Error(error);
  }
});

// Get a CategoryProduct
const getCategoryProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCategoryProduct = await CategoryProduct.findById(id);
    res.json(getCategoryProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all CategoryProduct
const getAllCategoryProduct = asyncHandler(async (req, res) => {
  try {
    const getAllCategoryProduct = await CategoryProduct.find();
    res.json(getAllCategoryProduct);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCategoryProduct,
  updateCategoryProduct,
  deleteCategoryProduct,
  getCategoryProduct,
  getAllCategoryProduct,
};

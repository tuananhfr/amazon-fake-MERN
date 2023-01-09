const Brand = require("../models/brandModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a new brand
const createBrand = asyncHandler(async (req, res) => {
  try {
    const createBrand = await Brand.create(req.body);
    res.json(createBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Brand
const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a Brand
const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteBrand = await Brand.findByIdAndDelete(id);
    res.json("Delete Completed");
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Brand
const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getBrand = await Brand.findById(id);
    res.json(getBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all Brand
const getAllBrand = asyncHandler(async (req, res) => {
  try {
    const getAllBrand = await Brand.find();
    res.json(getAllBrand);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrand,
};

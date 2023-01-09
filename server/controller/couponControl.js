const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongoDbId");

// Create a new Coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const createCoupon = await Coupon.create(req.body);
    res.json(createCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Update a Coupon
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete a Coupon
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json("Delete Completed");
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Coupon
const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getCoupon = await Coupon.findById(id);
    res.json(getCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Get all Coupon
const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const getAllCoupon = await Coupon.find();
    res.json(getAllCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getCoupon,
  getAllCoupon,
};

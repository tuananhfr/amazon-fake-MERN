const express = require("express");
const {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getWishList,
  saveAddress,
  userCart,
  getUserCart,
  EmptyCart,
  applyCoupon,
  createOrder,
  getOrder,
  updateOrderStatus,
} = require("../controller/userControl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/cart", authMiddleware, userCart);

router.get("/cart", authMiddleware, getUserCart);

router.delete("/empty-cart", authMiddleware, EmptyCart);

router.post("/cart/applycoupon", authMiddleware, applyCoupon);

router.post("/cart/cash-order", authMiddleware, createOrder);

router.get("/cart/get-orders", authMiddleware, getOrder);

router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);

router.get("/all-users", getAllUsers);

router.get("/wishlist", authMiddleware, getWishList);

router.get("/:id", authMiddleware, isAdmin, getUser);

router.delete("/:id", deleteUser);

router.put("/update-user", authMiddleware, updateUser);

router.put("/save-address", authMiddleware, saveAddress);

router.put("/update-password", authMiddleware, updatePassword);

router.post("/forgot-password-token", forgotPasswordToken);

router.put("/reset-password/:token", resetPassword);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;

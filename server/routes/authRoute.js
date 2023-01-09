const express = require("express");
const {
  registerUser,
  loginUser,
  handleRefreshToken,
  logout,
  loginAdmin,
} = require("../controller/authControl");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);

router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);

module.exports = router;

const express = require("express");
const {
  updateMe,
  uploadUserPhoto,
  resizeUserPhoto,
} = require("../controllers/userController");

const {
  signup,
  login,
  updatePassword,
  protect,
  restrictTo,
  logout,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

// Protect all routes after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);
router.patch("/updateMe", uploadUserPhoto, resizeUserPhoto, updateMe);

module.exports = router;

const express = require("express");
const {
  protect,
  isLoggedIn,
  restrictTo,
} = require("../controllers/authController");

const {
  getHomepage,
  getWaterAerobicsPage,
  getAdminPage,
  getAdminSignupPage,
  getAdminLessonsPage,
  getAdminWaPage,
} = require("../controllers/viewsController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/water-aerobics", getWaterAerobicsPage);

// Admin
router.get("/admin", isLoggedIn, getAdminPage);
router.get("/admin/signup", isLoggedIn, getAdminSignupPage);
router.get("/admin/lessons", isLoggedIn, getAdminLessonsPage);
router.get("/admin/water-aerobics", isLoggedIn, getAdminWaPage);

module.exports = router;

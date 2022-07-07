const express = require("express");
const { protect, restrictTo } = require("../controllers/authController");

const {
  createNewLesson,
  getLesson,
  getLessons,
  updateLesson,
} = require("../controllers/lessonController");

const router = express.Router();

router.route("/").get(getLessons).post(createNewLesson);
router.get("/:id", getLesson);

//  ADMIN
router.route("/").get(protect, restrictTo("admin"), getLessons);

router
  .route("/:id")
  .get(protect, restrictTo("admin"), getLesson)
  .patch(protect, restrictTo("admin"), updateLesson);
// .delete(protect, restrictTo("admin"), deleteEvent);

module.exports = router;

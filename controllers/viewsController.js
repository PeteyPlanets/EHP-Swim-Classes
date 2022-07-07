const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Lesson = require("../models/lessonModel");
const Signup = require("../models/waModel");

const getHomepage = catchAsync(async (req, res) => {
  // Render template using tour data
  res.status(200).render("home", {
    title: "Home",
  });
});

// ----------- ADMIN -----------
const getAdminPage = (req, res) => {
  res.status(200).render("./admin/admin", {
    title: "Admin",
  });
};

const getWaterAerobicsPage = (req, res) => {
  res.status(200).render("./waterAerobics", {
    title: "Admin",
  });
};
const getAdminSignupPage = (req, res) => {
  res.status(200).render("./admin/signup", {
    title: "Admin - Signup",
  });
};
const getAdminWaPage = async (req, res) => {
  const signups = await Signup.find();

  res.status(200).render("./admin/wa", {
    title: "Admin - Water Aerobics",
    signups,
  });
};
const getAdminLessonsPage = catchAsync(async (req, res) => {
  const lessons = await Lesson.find();

  res.status(200).render("./admin/lessons", {
    title: "Admin - Lessons",
    lessons,
  });
});

const getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};
const getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your account",
  });
};

module.exports = {
  getHomepage,
  getWaterAerobicsPage,
  getLoginForm,
  getAccount,
  getAdminPage,
  getAdminSignupPage,
  getAdminLessonsPage,
  getAdminWaPage,
};

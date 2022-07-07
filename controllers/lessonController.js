const Lesson = require("../models/lessonModel.js");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const SendGridEmail = require("../utils/email");

exports.getLesson = catchAsync(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      lesson,
    },
  });
});

exports.getLessons = catchAsync(async (req, res, next) => {
  const lessons = await Lesson.find();

  res.status(200).json({
    status: "success",
    data: {
      lessons,
    },
  });
});

exports.createNewLesson = catchAsync(async (req, res, next) => {
  const newLesson = await Lesson.create({
    name: req.body.name,
    phone: req.body.phone,
    age: req.body.age,
    gender: req.body.gender,
    addedNotes: req.body.addedNotes,
    preferredInstructor: req.body.preferredInstructor,
    preferredTimes: req.body.preferredTimes,
    dateReceived: req.body.dateReceived,
  });

  await new SendGridEmail(process.env.CONTACT_EMAIL).sendWelcome(
    "Swim Lesson",
    Object.values({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
      gender: req.body.gender,
      addedNotes: req.body.addedNotes,
      preferredInstructor: req.body.preferredInstructor,
      preferredTimes: req.body.preferredTimes,
      dateReceived: req.body.dateReceived,
    })
  );

  res.status(201).json({
    status: "success",
    data: {
      newLesson,
    },
  });
});

exports.updateLesson = catchAsync(async (req, res, next) => {
  const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!lesson) {
    return next(new AppError("No event found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      lesson,
    },
  });
});

// exports.deleteEvent = catchAsync(async (req, res, next) => {
//   const event = await Event.findByIdAndDelete(req.params.id, req.body);

//   if (!event) {
//     return next(new AppError("No event found with that ID", 404));
//   }

//   res.status(204).json({
//     status: "success",
//     data: null,
//   });
// });

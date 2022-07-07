const waSignup = require("../models/waModel.js");
const catchAsync = require("../utils/catchAsync");
const SendGridEmail = require("../utils/email");

exports.createNewWaSignup = catchAsync(async (req, res, next) => {
  const newUser = await waSignup.create({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    addedNotes: req.body.addedNotes,
    dateReceived: req.body.dateReceived,
  });

  await new SendGridEmail(process.env.CONTACT_EMAIL).sendWelcome(
    "Water Aerobics",
    Object.values({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      addedNotes: req.body.addedNotes,
      dateReceived: req.body.dateReceived,
    })
  );

  res.status(201).json({
    status: "success",
    data: {
      newUser,
    },
  });
});

const mongoose = require("mongoose");
const validator = require("validator");

const waSignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for contact"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number to reach you on"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email to reach you on"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  addedNotes: {
    type: String,
  },
  dateReceived: {
    type: String,
  },
});

const waSignup = mongoose.model("waSignup", waSignupSchema);

module.exports = waSignup;

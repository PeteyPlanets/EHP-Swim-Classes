const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to contact for this lesson"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number to reach you on"],
    unique: true,
  },
  age: {
    type: String,
    required: [true, "Please provide a an age"],
  },
  gender: {
    type: String,
    required: [
      true,
      "Please provide a gender to help us select the best instructor for the job",
    ],
  },
  addedNotes: {
    type: String,
  },
  preferredInstructor: {
    type: String,
    default: "no preference",
  },
  preferredTimes: {
    type: String,
    default: "flexible",
  },
  assignedInstructor: {
    type: String,
  },
  dateReceived: {
    type: String,
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;

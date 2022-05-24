const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true
  },
  courseID: {
    type: String,
    required: true
  },
  dateJoined: {
    type: Date,
    required: true,
  }
});

module.exports = mongoose.model("Registration", registrationSchema);
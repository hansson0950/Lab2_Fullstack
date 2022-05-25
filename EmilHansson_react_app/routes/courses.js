const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.get("/:id", getCourse, (req, res) => {
  res.json(res.course);
})

async function getCourse(req, res, next) {
  let course;
  try {
    course = await Course.findById(req.params.id);
    if (course == null) {
      return res.status(404).json({ message: "Course does not exist" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.course = course;
  next();
}

module.exports = router;
const express = require("express");
const signale = require("signale");
const mongoose = require("mongoose");
const cors = require("cors");
const students = require("./routes/students");
const registrations = require("./routes/registrations");
const courses = require("./routes/courses");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  signale.success("Connected to database");
});

app.use(express.json());
app.use(express.static("dist"));

app.use("/api/students", students);
app.use("/api/registrations", registrations);
app.use("/api/courses", courses);

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
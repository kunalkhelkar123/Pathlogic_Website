const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db");

// Fetch all student data
router.get("/getStudent", async (req, res) => {
  try {
    console.log("check1");

    const [user] = await db.query("SELECT * FROM students_info");
    console.log("check2");

    if (user.length === 0) {
      console.log(user);
      return res.status(201).json({ message: "Student Not Found." });
    }

    console.log("check3");
    res
      .status(200)
      .json({ message: "Student Data Fetch Successfully", StudentData: user });
  } catch (err) {
    console.log("check4 ");
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Add a new student
router.post("/addStudent", async (req, res) => {
  try {
    const { studentName, email, phoneNumber, activeCourse, isActive } =
      req.body;

    if (!studentName || !email || !phoneNumber || !activeCourse) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const query =
      "INSERT INTO students_info (studentName, email, phoneNumber, activeCourse, isActive) VALUES (?, ?, ?, ?, ?)";
    const values = [
      studentName,
      email,
      phoneNumber,
      activeCourse,
      isActive || 0,
    ];

    await db.query(query, values);

    res.status(201).json({ message: "Student added successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add student." });
  }
});

// Update an existing student
router.put("/updateStudent", async (req, res) => {
  try {
    console.log("inside update student", req.body);

    const {
      id,
      name,
      email,
      city,
      pin,
      isactive,
      username,
      phone,
      college_name,
      course_name,
      current_year,
      year_of_admission,
      year_of_passout,
      interested_course,
      activecourse_name,
      
    } = req.body;
    // console.log("id in update student", id);

    // const { studentName, email, phoneNumber, activeCourse, isActive } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const query = `UPDATE students_info 
    SET name = ?, email = ?, city = ?, pin = ?, isactive = ?, username = ?, phone = ?, college_name = ?, course_name = ?, current_year = ?, year_of_admission = ?, year_of_passout = ?, interested_course = ?, activecourse_name = ? 
    WHERE id = ?`; // Assuming you're updating a specific student by ID
    const values = [
      name,
      email,
      city,
      pin,
      isactive,
      username,
      phone,
      college_name,
      course_name,
      current_year,
      year_of_admission,
      year_of_passout,
      interested_course,
      activecourse_name,
      id,
    ]; // Include the student's ID to identify which student to update
    // console.log("Update Values In DB");
    const [result] = await db.query(query, values);



console.log("result ", result)

    // console.log("Updated Data");
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found." });
    }

    res.status(200).json({ message: "Student updated successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update student." });
  }
});

 
 

module.exports = router;

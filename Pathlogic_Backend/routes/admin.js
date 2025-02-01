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

router.post("/getStudentbyname", async (req, res) => {
  try {
    const { activecourse_name } = req.body; // Get name from request body
    console.log("Course name in getStudentbyname:", activecourse_name);

    const [user] = await db.query("SELECT * FROM students_info WHERE activecourse_name = ?", [activecourse_name]); // Filter by name

    if (user.length === 0) {
      return res.status(404).json({ message: "Student Not Found." });
    }

    res.status(200).json({ message: "Student Data Fetch Successfully", StudentData: user });
  } catch (err) {
    console.error("Error fetching student:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/questionsbycoursename", async (req, res) => {
  try {
    const { activecourse_name } = req.body; // Get course name from request body

    console.log("activecourse_name from questionsbycoursename", activecourse_name)
    let tableName = "";
    if (!activecourse_name) {
      return res.status(400).json({ message: "Course name is required" });
    }

    if (activecourse_name == "corejava") {
      console.log("inside code java")
      tableName = "corejava";
    } else if (activecourse_name == "advancedjava") {
      tableName = "advancedjava"
    } else if (activecourse_name == "reactjs") {
      tableName = "reactjs";

    }
    else if (activecourse_name == "angularjs") {
      tableName = "angularjs";

    }
    else if (activecourse_name == "nodejs") {
      tableName = "nodejs";

    }
    else if (activecourse_name == "python") {
      tableName = "python";

    }
    else if (activecourse_name == "reactnative") {
      tableName = "reactnative";

    }
    else if (activecourse_name == "fullstackjava") {
      tableName = "fullstackjava";

    }
    else if (activecourse_name == "netcore") {
      tableName = "netcore";

    }
    else if (activecourse_name == "netangular") {
      tableName = "netangular";

    }
    else if (activecourse_name == "softwaretesting") {
      tableName = "softwaretesting";

    }
    else if (activecourse_name == "powerbi") {
      tableName = "powerbi";
    }

    else if (activecourse_name == "datascience") {
      tableName = "datascience";
    }

    else if (activecourse_name == "awsdevops") {
      tableName = "awsdevops";

    }
    else if (activecourse_name == "digitalmarketing") {
      tableName = "digitalmarketing";

    }
    else if (activecourse_name == "fullstackjavadeveloper") {
      tableName = "fullstackjavadeveloper";

    }
    else if (activecourse_name == "fullstacknetdeveloper") {
      tableName = "fullstacknetdeveloper";

    } else if (activecourse_name == "fullstackdevops") {
      tableName = "fullstackdevops";

    } else if (activecourse_name == "fullstacksalesforce") {
      tableName = "fullstacksalesforce";

    } else if (activecourse_name == "fullstacktesting") {
      tableName = "fullstacktesting";

    } else if (activecourse_name == "fullstackpython") {
      tableName = "fullstackpython";

    } else if (activecourse_name == "fullstackai") {
      tableName = "fullstackai";

    } else if (activecourse_name == "diplomadigitalmarketing") {
      tableName = "diplomadigitalmarketing";

    } else if (activecourse_name == "fullstackwebdeveloper") {
      tableName = "fullstackwebdeveloper";

    } else if (activecourse_name == "manualtesting") {
      tableName = "manualtesting";

    } else if (activecourse_name == "seleniumwithjava") {
      tableName = "seleniumwithjava";

    } else if (activecourse_name == "salesforcedevelopment") {
      tableName = "salesforcedevelopment";

    }

    const query = `SELECT * FROM ${tableName}`;
    console.log("query ", query)
    const [results] = await db.execute(query);
    console.log("result ==> ", results)
    res.status(200).json({ message: "Data fetched successfully", data: results });
  } catch (error) {
    console.error("Error fetching questions:", error);
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


router.put("/updateStatus", async (req, res) => {
  try {
    console.log("inside update status", req.body);

    const { id, isactive, } = req.body;
    // console.log("id in update status", id, isactive);

    // const { studentName, email, phoneNumber, activeCourse, isActive } = req.body;

    if (!id || !isactive) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const query = `UPDATE students_info 
    SET isactive = ? WHERE id=?
`;


    let value = "";
    console.log("isctive value ", isactive);

    if (isactive === "TRUE") {
      console.log("isctive value  inside true if  ", isactive);
      value = "FALSE"
    }

    if (isactive === "FALSE") {
      console.log("isctive value false inside if  ", isactive);
      value = "TRUE"
    }

    console.log("Update Values In DB");
    const [result] = await db.query(query, [value, id]);



    console.log("result ", result)

    //     // console.log("Updated Data");
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

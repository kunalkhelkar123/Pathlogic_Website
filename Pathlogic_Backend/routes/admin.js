const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db")
//// Register endpoint





router.get("/getStudent", async (req, res) => {
//   const { username, password } = req.body;
//   console.log("Login data:", { username, password });
  try {
    console.log("check1");
    
    const [user] = await db.query("SELECT * FROM students_info ");
    console.log("check2");

    if (user.length === 0) {
      console.log(user)
      return res.status(201).json({ message: "Student Not Found." });
    }

    // Handle successful login (return JWT or session)
    console.log("check3");

    res.status(200).json({ message: "Student Data Fetch Sucessfully", StudentData: user  });

  } catch (err) {
    console.log("check4");

    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

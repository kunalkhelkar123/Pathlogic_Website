const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db")
//// Register endpoint


router.post("/register", async (req, res) => {
  const {
    name,
    email,
    city,
    pin,
    phone,
    username,
    password,
    confirmPassword,
    collegeName,
    courseName,
    currentYear,
    yearOfAdmission,
    yearOfPassout,
    interestedCourse,
  } = req.body;

  console.log("Registration data:", {
    name,
    email,
    city,
    pin,
    phone,
    username,
    password,
    confirmPassword,
    collegeName,
    courseName,
    currentYear,
    yearOfAdmission,
    yearOfPassout,
    interestedCourse,
  });

  // Validation: Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  // Validation: Check if email already exists
  try {
    const [existingUser] = await db.query("SELECT email FROM students_info WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      console.log("Email already exists ", existingUser, email)
      return res.status(401).json({ message: "Email already exists" });
    }
    const [existingUsername] = await db.query("SELECT email FROM students_info WHERE username = ?", [username]);

    if (existingUsername.length > 0) {
      console.log("existingUsername already exists ", existingUsername, existingUsername)
      return res.status(402).json({ message: "existingUsername already exists" });
    }

    // Hash password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new student record into database with all the necessary fields
    const query = `
      INSERT INTO students_info (
        name, email, city, pin, phone,username, password,ORG_password, college_name, course_name,
        current_year, year_of_admission, year_of_passout, interested_course
      ) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?)
    `;

    await db.query(query, [
      name,
      email,
      city,
      pin,
      phone,
      username,
      hashedPassword,
      password,
      collegeName,
      courseName,
      currentYear,
      yearOfAdmission,
      yearOfPassout,
      interestedCourse,
    ]);

    return res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login data:", { username, password });
  try {
    const [user] = await db.query("SELECT * FROM students_info WHERE username = ?",  [username]);
   
    if (user.length === 0) {
      console.log(user)
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      console.log(isMatch);
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // Handle successful login (return JWT or session)
    res.status(200).json({ message: "Login successful", user: user[0] });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/loginadmin", async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;

 
    const [user] = await db.query("SELECT * FROM admin_user WHERE email = ?", [username]);
    console.log("data is",user)
    if (user.length === 0) {

      return res.status(401).json({ message: "Invalid email or password." });
    }
    console.log("user array data",user[0].password)
    const isMatch = bcrypt.compare(password, user[0].password);
    console.log("is Match is",isMatch);
    if (!isMatch) {
      console.log(isMatch)
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Handle successful login (return JWT or session)
    res.status(200).json({ message: "Login successful", user: user[0] });

  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
});

router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;
  console.log("check")
  try {
    // Query to find user by username
    const [userResult] = await db.query("SELECT * FROM admin_user WHERE email = ?", [username]);

    // Check if user exists
    if (userResult.length === 0) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const user = userResult[0];

    // Check if password matches either bcrypt-hashed or plain-text password
    const isMatch = (await bcrypt.compare(password, user.password)) || password === user.password;

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // Successful login response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        org: user.org,
      },
    });

  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




router.post("/adminlogin", async (req, res) => {
  const { username, password } = req.body;
  console.log("check")
  try {
    // Query to find user by username
    const [userResult] = await db.query("SELECT * FROM admin_user WHERE email = ?", [username]);

    // Check if user exists
    if (userResult.length === 0) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    const user = userResult[0];

    // Check if password matches either bcrypt-hashed or plain-text password
    const isMatch = (await bcrypt.compare(password, user.password)) || password === user.password;

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // Successful login response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        org: user.org,
      },
    });

  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




module.exports = router;

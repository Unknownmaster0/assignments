const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const secretKey = "toMuchSecret";

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const newAdmin = new Admin({
    username: username,
    password: password,
  });

  newAdmin.save();
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.findOne({ username: username });
  if (!user) {
    // user doesn't exist.
    return res.status(404).json({
      msg: `user doesn't exist! 😭😭😭`,
    });
  }

  // create a jwt sign and return the token.
  const token = jwt.sign({ username }, secretKey);
  return res.json({
    token,
  });
});

/* Description: Creates a new course.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }*/
router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const body = req.body;
  const newCourse = new Course({
    title: body.title,
    description: body.description,
    price: body.price,
    imageLink: body.imageLink,
    published: true,
  });

  newCourse.save();
  res.json({
    message: "Course created successfully",
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.json({
    courses,
  });
});

module.exports = router;

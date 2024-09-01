const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
// const { ObjectId } = require("mongoose").Types;

// User Routes
/* - POST /users/signup
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' } */
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({
    username: username,
    password: password,
  });

  newUser.save();
  res.json({
    message: "User created successfully",
  });
});

/*
- GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] } */
router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allcourses = await Course.find();
  res.json({
    allcourses,
  });
});

/*
- POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { message: 'Course purchased successfully' } */
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  //   if the courseId exist or not ?
  try {
    const course = await Course.findOne({ _id: courseId });
  } catch (err) {
    res.status(500).json({
      msg: `course doesn't exist`,
    });
  }

  await User.updateOne(
    { username: req.headers.username },
    { $push: { purchasedCourses: courseId } }
  );
  res.json({
    message: "Course purchased successfully",
  });
});

/*
- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'username': 'username', 'password': 'password' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }*/
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.headers.username });
  const coursesId = user.purchasedCourses;

  // get all the courses with this coursesId
  // const allCourses = await Course.find(); // get all the courses array.

  // const val = allCourses.filter((obj) => coursesId.includes(obj._id));

  // other way of doing the above thing easily with help of mongoose methods
  // const courses = await Course.find({ _id: { $in: courseIds } });
  let val;
  try {
    val = await Course.find({
      _id: {
        // $in: user.purchasedCourses,
        $in: coursesId,
      },
    });
  } catch (error) {
    res.json({
      error,
    });
  }
  res.json({
    val,
  });
});

module.exports = router;

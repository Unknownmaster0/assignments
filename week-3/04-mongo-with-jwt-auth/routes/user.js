const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const secretKey = "toMuchSecret";

// User Routes
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

router.post("/signin", async(req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username: username });
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allcourses = await Course.find();
  res.json({
    allcourses,
  });
});

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

  const username = jwt.decode(req.headers.authorization).username;

  await User.updateOne(
    { username:  username},
    { $push: { purchasedCourses: courseId } }
  );
  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.headers.username });
  const coursesId = user.purchasedCourses;

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

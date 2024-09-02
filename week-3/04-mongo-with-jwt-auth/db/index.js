const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "write your own mogodb URL here"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return val.includes("@");
      },
      messgae: `username must contain '@'`,
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
    validate: {
      validator: function (val) {
        return val.includes("@");
      },
      messgae: `username must contain '@'`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: `This is default description`,
  },
  price: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};

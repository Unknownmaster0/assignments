const { User } = require("../db");
const jwt = require("jsonwebtoken");
const secretKey = "toMuchSecret";

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;

  try {
    const object = jwt.verify(token, secretKey);

    const user = await User.findOne({ username: object.username });
    if (!user) {
      // user doesn't exist.
      return res.json({
        msg: `user doesn't exist! 😭😭😭`,
      });
    } else {
      next();
    }
  } catch (err) {
    return res.json({
      msg: `user doesn't exist`,
      error: err,
    });
  }
}

module.exports = userMiddleware;

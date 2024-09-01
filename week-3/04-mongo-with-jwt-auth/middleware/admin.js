const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const secretKey = "toMuchSecret";

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  // Headers: { 'username': 'username', 'password': 'password' }
  const token = req.headers.authorization;

  try {
    const object = jwt.verify(token, secretKey);

    const user = await Admin.findOne({ username: object.username });
    if (!user) {
      // user doesn't exist.
      return res.json({
        msg: `admin doesn't exist! 😭😭😭`,
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(`error comes from here.`);
    return res.json({
      msg: `admin doesn't exist`,
      error: err,
    });
  }
}

module.exports = adminMiddleware;

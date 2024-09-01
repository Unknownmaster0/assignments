const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  // Headers: { 'username': 'username', 'password': 'password' }
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await Admin.findOne({ username: username });
  if (!user) {
    // user doesn't exist.
    return res.json({
      msg: `user doesn't exist! 😭😭😭`,
    });
  }

  // if user exist then match the password.
  if (user.password === password) {
    // user verified
    next();
  } else {
    // else password is wrong.
    return res.json({
      msg: `Password is wrong!🙄🙄🙄`,
    });
  }
}

module.exports = adminMiddleware;

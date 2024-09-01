const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await User.findOne({ username: username });
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

module.exports = userMiddleware;

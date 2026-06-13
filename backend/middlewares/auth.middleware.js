const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findbyId(decoded.id);

    next();
  } catch {
    res.status(401).json({ message: "Token yaroqsiz" });
  }
};

module.exports = { protect };

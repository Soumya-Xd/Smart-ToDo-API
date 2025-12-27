const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  console.log("HEADERS RECEIVED:", req.headers); // 👈 VERY IMPORTANT

  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

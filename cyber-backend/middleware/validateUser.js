const jwt = require("jsonwebtoken");
const User = require("../models/users");
const { errorRes } = require("../utils/responseHandler");
const JWT_SECRET = process.env.JWT_SECRET;

const validate = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return errorRes(res, 400, "Not Authorized to access this route");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return errorRes(res, 404, "Unidentified User");
    }
    req.user = user;
    next();
  } catch (error) {
    return errorRes(res, 401, "Not Authorized to access this route");
  }
};

module.exports = validate;

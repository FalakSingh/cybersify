const User = require("../models/users");
const { errorRes, successRes } = require("../utils/responseHandler");

const register = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();

    const emailExists = await User.findOne({ email });
    if (emailExists) return errorRes(res, 400, "Email already exists");

    const userMong = await User.create({ ...req.body });

    const user = userMong.toObject();
    delete user.password;
    return successRes(res, 200, "Account created successfully", user);
  } catch (error) {
    return errorRes(res, 500, error.message);
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const userExists = await User.findOne({ email, status: 1 }).select(
      "+password"
    );

    if (!userExists) return errorRes(res, 400, "User doesn't exist");

    const isMatch = userExists.checkPass(req.body.password);
    if (!isMatch) return errorRes(res, 400, "Invalid credentials");

    const token = userExists.getJwt();

    const user = userExists.toObject();
    delete user.password;
    user.token = token;

    return successRes(res, 200, "Logged in successfully", user);
  } catch (error) {
    return errorRes(res, 500, error.message);
  }
};

module.exports = { register, login };

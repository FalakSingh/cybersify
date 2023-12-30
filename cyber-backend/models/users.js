const mongoose = require("mongoose");
const basicModelFields = require("../constants/basicModelFields");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  { ...basicModelFields },
  { timestamps: true }
);

userSchema.index({ location: "2dsphere" });


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.checkPass = async function (givenpassword) {
  return await bcrypt.compare(givenpassword, this.password);
};

userSchema.methods.getJwt = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const User = mongoose.model("User", userSchema, "users");

module.exports = User;

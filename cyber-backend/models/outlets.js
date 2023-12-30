const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
    },
  },
  address: String,
  address1: String,
  address2: String,
  post_code: String,
  city: String,
  status: { type: Number, default: 1 },
});

outletSchema.index({ location: "2dsphere" });

const Outlet = mongoose.model("Outlet", outletSchema, "outlets");

module.exports = Outlet;

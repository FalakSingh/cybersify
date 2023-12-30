const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    outlet_id: { type: mongoose.Schema.Types.ObjectId, ref: "Outlet" },
    title: String,
    desc: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;

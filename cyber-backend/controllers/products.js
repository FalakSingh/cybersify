const Product = require("../models/products");
const { errorRes, successRes } = require("../utils/responseHandler");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ outlet_id: req.query.outlet_id });
    return successRes(res, 200, "Products list", products);
  } catch (error) {
    return errorRes(res, 500, error.message);
  }
};

module.exports = { getProducts };

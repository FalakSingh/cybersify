const { getOutlets } = require("../controllers/outlets");
const { getProducts } = require("../controllers/products");
const { seed } = require("../controllers/seed");
const validate = require("../middleware/validateUser");
const router = require("express").Router();

router.route("/seed").get(seed);
router.route("/getOutlets").get(getOutlets);
router.route("/getProducts").get(getProducts);

module.exports = router;

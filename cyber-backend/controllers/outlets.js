const Outlet = require("../models/outlets");
const { errorRes, successRes } = require("../utils/responseHandler");

const getOutlets = async (req, res) => {
  try {
    const { lat, long } = req.query;

    const outlets = await Outlet.find({
      location: {
        $near: {
          $maxDistance: 1000,
          $geometry: {
            type: "Point",
            coordinates: [long, lat],
          },
        },
      },
    });
    return successRes(res, 200, "Outlets list", outlets);
  } catch (error) {
    return errorRes(res, 500, error.message);
  }
};

module.exports = { getOutlets };

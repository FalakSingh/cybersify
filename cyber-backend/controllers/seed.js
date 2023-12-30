const Outlet = require("../models/outlets");
const Product = require("../models/products");
const { errorRes, successRes } = require("../utils/responseHandler");

const seed = async (req, res) => {
  try {
    const outlet = await Outlet.create({
      name: "3B2 Mohali",
      location: {
        type: "Point",
        //long, lat
        coordinates: [76.721745, 30.709876],
      },
      address: "3B2 Sector 60 160059 Mohali Punjab",
      address1: "3B2",
      address2: "Sector 60 Mohali",
      post_code: "160059",
      city: "Punjab",
    });

    const products = [
      {
        title: "Margherita",
        desc: "Pizza with margherita cheese",
        price: 100,
        image: "/marg.jpg",
      },
      {
        title: "Paprika",
        desc: "Pizza with paprika",
        price: 100,
        image: "/pap.jpg",
      },
      {
        title: "Chilli",
        desc: "Pizza with chilli",
        price: 100,
        image: "/chili.jpg",
      },
    ];

    for (let el of products) {
      await Product.create({ outlet_id: outlet?._id, ...el });
    }

    return successRes(res, 200, "Data seeded successfully");
  } catch (error) {
    return errorRes(res, 500, error.message);
  }
};

module.exports = { seed };

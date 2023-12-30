const basicModelFields = {
  full_name: String,
  email: { type: String, required: true },
  password: { type: String, select: false },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      //   required: true
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
      //   required: true
    },
  },
  // 1 for active 0 for deleted
  status: { type: Number, default: 1 },
};

module.exports = basicModelFields;

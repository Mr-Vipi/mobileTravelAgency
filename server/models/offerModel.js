const mongoose = require("mongoose");

const offerSchema = mongoose.Schema(
  {
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Agent",
    },
    carouselImages: [
      {
        type: String,
        required: [true, "Please add some image urls"],
      },
    ],
    defaultImage: {
      type: String,
      required: [true, "Please add an image url"],
    },
    description: {
      type: String,
      required: [true, "Please add an description"],
    },
    duration: {
      type: Number,
      required: [true, "Please add the duration"],
    },
    location: {
      type: String,
      required: [true, "Please add the location"],
    },
    price: {
      type: Number,
      required: [true, "Please add the price"],
    },
    rating: {
      type: Number,
      required: [true, "Please add the location"],
    },
    title: {
      type: String,
      required: [true, "Please add the title"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Offer", offerSchema);

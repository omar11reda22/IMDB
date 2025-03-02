const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, 
    rating: { type: Number, required: true, min: 0, max: 10 }, 
    review: { type: String, required: true }, 
  },
  { timestamps: true } 
);

module.exports = mongoose.model("Review", reviewSchema);

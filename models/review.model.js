const mongoose = require("mongoose");

const reviewschema = new mongoose.Schema({
  _id: "ObjectId",
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: "movie" }, // Reference to Movie
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // Reference to User
  rating: "number", // Example: 8.5
  review: "string",
  timestamps: true,
});

module.exports = mongoose.model("Review", reviewschema);
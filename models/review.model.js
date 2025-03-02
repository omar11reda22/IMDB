const mongoose = require("mongoose");

const reviewschema = new mongoose.Schema({
  _id: "ObjectId",
  movieId: "ObjectId", // Reference to Movie
  userId: "ObjectId", // Reference to User
  rating: "number", // Example: 8.5
  review: "string",
  createdAt: "date",
  updatedAt: "date",
});

module.exports = mongoose.model("Review", reviewschema);
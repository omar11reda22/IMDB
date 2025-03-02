const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  _id: "ObjectId",
  userId: "ObjectId", // Reference to User
  movies: ["ObjectId"], // References to Movies
  createdAt: "date",
  updatedAt: "date",
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
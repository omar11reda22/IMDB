const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  
  userId: {type:mongoose.Schema.Types.ObjectId , ref:"user"}, // Reference to User
  movies: [{type:mongoose.Schema.Types.ObjectId , ref:"movie"}], // References to Movies
  timestamps: true,
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
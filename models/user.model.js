const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  _id: "ObjectId",
  username: "string",
  email: "string",
  password: "string", // Should be hashed
  avatar: "string",
  role: "string", // User, Admin, Moderator
  watchlist: [{type:mongoose.Schema.Types.ObjectId , ref:"watchlist"}], // References to Movie collection
  reviews: [{type:mongoose.Schema.Types.ObjectId , ref:"reviews"}], // References to Reviews collection
  timestamps: true,
});

module.exports = mongoose.model("User", userschema);
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  _id: "ObjectId",
  username: "string",
  email: "string",
  password: "string", // Should be hashed
  avatar: "string",
  role: "string", // User, Admin, Moderator
  watchlist: ["ObjectId"], // References to Movie collection
  reviews: ["ObjectId"], // References to Reviews collection
  createdAt: "date",
  updatedAt: "date",
});

module.exports = mongoose.model("User", userschema);
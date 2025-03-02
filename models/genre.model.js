const mongoose = require("mongoose");

const genreschema = new mongoose.Schema({
  _id: "ObjectId",
  name: "string",
});

module.exports = mongoose.model("Genre", genreschema);
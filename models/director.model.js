const mongoose = require("mongoose");

const actorschema = new mongoose.Schema({
  _id: "ObjectId",
  name: "string",
  bio: "string",
  birthdate: "date",
  nationality: "string",
  image: "string",
  movies: ["ObjectId"], // References to Movie collection
  createdAt: "date",
  updatedAt: "date",
});

module.exports = mongoose.model("Actor", actorschema);
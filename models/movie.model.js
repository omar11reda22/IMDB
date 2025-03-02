const mongoose = require("mongoose");
const movieschema = new mongoose.Schema({
  _id: "ObjectId",
  title: "string",
  year: "number",
  rating: "number",
  genres: ["string"],
  director: "ObjectId", // Reference to Director collection
  actors: ["ObjectId"], // References to Actor collection
  poster: "string", // URL to the movie poster
  description: "string",
  duration: "number", // In minutes
  releaseDate: "date",
  trailerUrl: "string",
  reviews: ["ObjectId"], // References to Reviews collection
  createdAt: "date",
  updatedAt: "date",
});



module.exports = mongoose.model("Movie", movieschema);

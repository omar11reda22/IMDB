const mongoose = require("mongoose");
const movieschema = new mongoose.Schema({
  _id: "ObjectId",
  title: "string",
  year: "number",
  rating: "number",
  genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "genre" }],
  director: [{ type: mongoose.Schema.Types.ObjectId, ref: "director" }],
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "actor" }],
  poster: "string",
  description: "string",
  duration: "number",
  releaseDate: "date",
  trailerUrl: "string",
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
  timestamps: true,
});



module.exports = mongoose.model("Movie", movieschema);

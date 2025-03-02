const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: "Genre" }], // Refers to Genre model
    director: [{ type: mongoose.Schema.Types.ObjectId, ref: "Director" }], // Refers to Director model
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }], // Refers to Actor model
    poster: { type: String },
    description: { type: String },
    duration: { type: Number },
    releaseDate: { type: Date },
    trailerUrl: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // Refers to Review model
  },
  { timestamps: true }
); 

module.exports = mongoose.model("Movie", movieSchema);

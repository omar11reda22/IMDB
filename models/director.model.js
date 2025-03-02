const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    birthdate: { type: Date, required: true },
    nationality: { type: String, required: true },
    image: { type: String }, // URL to the actor's image
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }], // References to Movie collection
  },
  { timestamps: true } // ✅ Correct placement of timestamps
);

module.exports = mongoose.model("Actor", actorSchema);

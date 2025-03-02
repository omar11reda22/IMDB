const mongoose = require("mongoose");
const actorschema = new mongoose.Schema({
  _id: "ObjectId",
  name: "string",
  bio: "string",
  birthdate: "date",
  nationality: "string",
  image: "string", // URL to the actor's image
  movies: [{type:mongoose.Schema.Types.ObjectId , ref:"movie"}], // References to Movie collection
  timestamps: true,
});

module.exports = mongoose.model("Actor", actorschema);

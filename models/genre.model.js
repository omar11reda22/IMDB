const mongoose = require("mongoose");
const { stripLow } = require("validator");

const genreschema = new mongoose.Schema({
  
  name: {type:String, required:true},
});

module.exports = mongoose.model("Genre", genreschema);
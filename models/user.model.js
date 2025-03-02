const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true }, 
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true },
    avatar: { type: String, default: "" }, 
    role: {
      type: String,
      enum: ["User", "Admin", "Moderator"],
      default: "User",
    }, 
    watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }], 
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], 
  },
  { timestamps: true } 
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("User", userSchema);

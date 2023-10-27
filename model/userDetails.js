const mongoose = require("mongoose");
const UserDetails = new mongoose.Schema(
  {
    userType: String,
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "userSchema",
  }
);

const User = mongoose.model("userSchema", UserDetails);
exports.User = User;

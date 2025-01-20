const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user-auth-details", userSchema);

module.exports = userModel;

const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  age: String,
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;

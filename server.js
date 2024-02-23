const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://mahtodeepak:deepak23@eatsy-be.fev9adq.mongodb.net/"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error in connecting to DB");
});

db.on("open", () => {
  console.log("DB connection is successful");
});

app.use(bodyParser.json());

app.listen("8000", () => {
  console.log("Server is Up and Running");
});

require(path.join(__dirname, "./routes/users.routes"))(app);
require(path.join(__dirname, "./routes/restaurants.routes"))(app);
require("./routes/users-auth.routes")(app);
require("./routes/restaurant-menu.routes")(app);

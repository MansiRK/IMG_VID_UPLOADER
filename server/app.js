const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");

dotenv.config();

const app = express();

connectDb();

app.listen(3000, () => {
  console.log("Server is running");
});

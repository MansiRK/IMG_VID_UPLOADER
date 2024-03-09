const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");

dotenv.config();

const app = express();

connectDb();

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("Server connection due to error: ", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;

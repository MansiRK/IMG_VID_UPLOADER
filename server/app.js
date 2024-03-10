const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
const Route = require("./router/uploadRoute");

dotenv.config();

const app = express();

app.use("/api", Route);

connectDb();

app.post("/test", (req, res) => {
  // console.log(req);
  res.send("Received request");
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("Server connection due to error: ", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;

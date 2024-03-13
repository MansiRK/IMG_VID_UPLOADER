const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
const Route = require("./router/uploadRoute");
const cors = require("cors");

dotenv.config();

// Create an instance of Express
const app = express();

app.use(cors());

app.use("/api", Route);

//Connecting to DB
connectDb();

app.get("/", (req, res) => {
  res.send("Image and Video Uploader");
});

// Start the server
app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("Server connection due to error: ", error);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;

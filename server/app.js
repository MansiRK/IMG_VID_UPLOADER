const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
const Route = require("./router/uploadRoute");
const cors = require("cors");

dotenv.config();

// Create an instance of Express
const app = express();

const corsOptions = {
  origin: "https://willowy-meringue-7068c6.netlify.app/",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

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

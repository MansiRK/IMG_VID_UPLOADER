const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDb = async (req, res) => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database is connected successfully.");
    })
    .catch((error) => {
      console.log("Database connection failed.", error);
    });
};

module.exports = connectDb;

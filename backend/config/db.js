const mongoose = require("mongoose");
async function connectDB() {
  const DB_URL = process.env.MONGODB_URL;
  mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("successfully connected Mongodb ");
    })
    .catch((error) => {
      console.log("Error to connect mongodb.", error);
    });
}

module.exports = connectDB;

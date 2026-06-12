const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// const authToutes = require(".rotes/authRotes");
// const patientToutes = require("/routes/patientRoutes");
// const doctorRoutes = require(".routes/doctorRoutes");
// const appointmentRoutes = require(",routes/appointmentRoutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});

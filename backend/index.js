const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.routes");

const connectDB = require("./config/db");

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in .env");
}

const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
connectDB();
// Routes
app.use("/api/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});

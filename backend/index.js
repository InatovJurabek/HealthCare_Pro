const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "This is some sample data from the backend.",
  };
  res.json(data);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

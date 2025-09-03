// server.js - My First Express Server
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

const cors = require("cors"); // Import cors
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "This data is open for everyone!" });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from ENGSE203 Express Server!</h1>Hi Express");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

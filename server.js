// server.js - My First Express Server
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

const cors = require("cors"); // Import cors
require("dotenv").config();

const helmet = require("helmet"); // Import helmet
const Joi = require("joi"); // << Import Joi

app.use(cors());
app.use(helmet());
app.use(express.json());

// สร้าง Schema สำหรับตรวจสอบข้อมูล user
const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  birth_year: Joi.number().integer().min(1900).max(new Date().getFullYear()),
});

// Route สำหรับสร้าง user
app.post("/api/users", (req, res) => {
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    // ถ้าข้อมูลไม่ถูกต้อง ส่ง 400 Bad Request กลับไปพร้อมรายละเอียด
    return res
      .status(400)
      .json({ message: "Invalid data", details: error.details });
  }

  // ถ้าข้อมูลถูกต้อง
  console.log("Validated data:", value);
  res.status(201).json({ message: "User created successfully!", data: value });
});

app.get("/api/data", (req, res) => {
  res.json({ message: "This data is open for everyone!" });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from ENGSE203 Express Server!</h1>Hi Express");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

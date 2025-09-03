// server.js - My First Express Server
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME;

// สร้าง Route (เส้นทาง) แรกสำหรับหน้าหลัก
app.get("/", (req, res) => {
  res.send("<h1>Hello from ENGSE203 Express Server!</h1>Hi Express");
});

// เริ่มต้นให้ Server รอรับการเชื่อมต่อ
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

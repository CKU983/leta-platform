const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ ok: true, name: "LETA API", ts: new Date().toISOString() });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  const ADMIN_USER = process.env.ADMIN_USER || "LETA";
  const ADMIN_PASS = process.env.ADMIN_PASS || "1234";

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    return res.json({ ok: true });
  }
  return res.status(401).json({ ok: false, message: "Invalid credentials" });
});

module.exports = app;

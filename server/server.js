const express = require("express");

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ ok: true, name: "LETA API" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "LETA" && password === "1234") {
    return res.json({ ok: true });
  }

  return res.status(401).json({ ok: false });
});

module.exports = app;

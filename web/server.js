const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>LETA Login</h1>
    <form>
      <input placeholder="Username" /><br/>
      <input placeholder="Password" type="password"/><br/>
      <button>Login</button>
    </form>
  `);
});

app.listen(3000, () => {
  console.log("Web running on port 3000");
});

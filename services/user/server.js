const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Hello from User Service" });
});

app.listen(5000, () => console.log("User service running on port 5000"));

const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json({ message: "Hello from Product Service" });
});

app.listen(5000, () => console.log("Product service running on port 5000"));

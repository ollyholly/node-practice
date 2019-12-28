const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.send("Hello world!");
});

app.get("/help", (req, res) => {
  res.send([
    { name: "Olly", age: "35" },
    { name: "Holly", age: "32" }
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h1>About us</h1>");
});

app.get("/weather", (req, res) => {
  res.send({
    location: "London",
    weather: { temperature: 20, rainChance: 0.1 }
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

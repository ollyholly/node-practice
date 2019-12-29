const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Coolest Weather App",
    name: "Olly Holly"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About the Weather App",
    name: "Olly Holly"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "We are here to help",
    name: "Olly Holly"
  });
});

app.get("/weather", (req, res) => {
  console.log(req.query);
  console.log(req.query.address);
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!"
    });
  }

  res.send({
    location: req.query.address,
    weather: { temperature: 20, rainChance: 0.1 }
  });
});

app.get("/help/*", (req, res) => {
  res.render("404-help", {
    title: "404 help",
    name: "Olly Holly",
    errorMessage: "Help page not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 page",
    name: "Olly Holly",
    errorMessage: "Page not found"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

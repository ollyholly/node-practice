const request = require("request");
const dotenv = require("dotenv");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

dotenv.config();

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geocode("London", (error, data) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log(data);
  }
});

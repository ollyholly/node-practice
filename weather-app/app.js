const request = require("request");
const dotenv = require("dotenv");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

dotenv.config();

const location = process.argv[2];

if (!location) {
  return console.log("Specify the location!");
} else {
  geocode(location, (error, { destination, latitude, longitude }) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log("Location:", destination);
          console.log("Weather forecast:", forecastData);
        }
      });
    }
  });
}

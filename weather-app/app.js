const request = require("request");
const dotenv = require("dotenv");

dotenv.config();
const weather_key = process.env.DARKSKY_TOKEN;
const url = `https://api.darksky.net/forecast/${weather_key}/37.8267,-122.4233?units=si`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather services!");
  } else if (response.body.error) {
    console.log("Error: ", response.body.error);
  } else {
    const summary = response.body.daily.data[0].summary;
    const temperature = response.body.currently.temperature;
    const rainChance = response.body.currently.precipProbability * 100;
    console.log(
      `${summary} It is currently ${temperature} degrees out. There is ${rainChance}% chance of rain.`
    );
  }
});

const location = "London";
const map_key = process.env.MAPBOX_TOKEN;
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${map_key}&limit=1`;

request({ url: geoUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Can not connect to geocoding services!");
  } else if (response.body.features.length === 0) {
    console.log("Can not find this location, try other query");
  } else {
    const destination = response.body.features[0].place_name;
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(
      `${destination}\nLatitude: ${latitude}\nLongitude: ${longitude}`
    );
  }
});

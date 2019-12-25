const request = require("request");
const dotenv = require("dotenv");
const geocode = require("./utils/geocode");

dotenv.config();
// const weather_key = process.env.DARKSKY_TOKEN;
// const url = `https://api.darksky.net/forecast/${weather_key}/37.8267,-122.4233?units=si`;

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather services!");
//   } else if (response.body.error) {
//     console.log("Error: ", response.body.error);
//   } else {
//     const summary = response.body.daily.data[0].summary;
//     const temperature = response.body.currently.temperature;
//     const rainChance = response.body.currently.precipProbability * 100;
//     console.log(
//       `${summary} It is currently ${temperature} degrees out. There is ${rainChance}% chance of rain.`
//     );
//   }
// });

geocode("London", (error, data) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log(data);
  }
});

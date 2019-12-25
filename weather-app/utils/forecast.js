const request = require("request");

const forecast = (lat, lon, callback) => {
  const weather_key = process.env.DARKSKY_TOKEN;
  const url = `https://api.darksky.net/forecast/${weather_key}/${lat},${lon}?units=si`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!");
    } else if (response.body.error) {
      callback("Error: ", response.body.error);
    } else {
      const summary = response.body.daily.data[0].summary;
      const temperature = response.body.currently.temperature;
      const rainChance = response.body.currently.precipProbability * 100;
      callback(
        undefined,
        `${summary} It is currently ${temperature} degrees out. There is ${rainChance}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;

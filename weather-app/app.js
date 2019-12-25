const request = require("request");

const url =
  "https://api.darksky.net/forecast/7029036e0b6dc750485ef578a87df769/37.8267,-122.4233?units=si";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  const temperature = response.body.currently.temperature;
  const rainChance = response.body.currently.precipProbability * 100;
  console.log(
    `It is currently ${temperature} degrees out. There is ${rainChance}% chance of rain.`
  );
});

const request = require("request");

const url =
  "https://api.darksky.net/forecast/7029036e0b6dc750485ef578a87df769/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});

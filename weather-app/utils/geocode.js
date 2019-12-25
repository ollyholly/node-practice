const request = require("request");
const dotenv = require("dotenv");

const geocode = (location, callback) => {
  const map_key = process.env.MAPBOX_TOKEN;
  const address = encodeURIComponent(location);
  const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${map_key}&limit=1`;

  request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
      callback("Can not connect to geocoding services!");
    } else if (response.body.features.length === 0) {
      callback("Can not find this location, try other query");
    } else {
      const destination = response.body.features[0].place_name;
      const latitude = response.body.features[0].center[0];
      const longitude = response.body.features[0].center[1];
      callback(
        undefined,
        `${destination}\nLatitude: ${latitude}\nLongitude: ${longitude}`
      );
    }
  });
};

module.exports = geocode;

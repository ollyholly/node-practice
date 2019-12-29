console.log("frontend script loaded");

fetch("http://localhost:3000/weather?address=boston")
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data.destination);
    console.log(data.weatherForecast);
  })
  .catch(e => {
    console.log(e);
  });

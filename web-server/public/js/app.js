console.log("frontend script loaded");

const weatherCall = location => {
  fetch("http://localhost:3000/weather?address=" + location)
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
};

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  const location = search.value;
  weatherCall(location);
});

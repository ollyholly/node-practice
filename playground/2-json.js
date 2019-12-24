const fs = require("fs");

const bioData = fs.readFileSync("2-bio.json").toString();
console.log(bioData);

const parsedBio = JSON.parse(bioData);
parsedBio.name = "Bob";
parsedBio.age = 32;
parsedBio.location = "New York";

const processedData = JSON.stringify(parsedBio);

fs.writeFileSync("2-bio.json", processedData);

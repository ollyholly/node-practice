const fs = require("fs");

const bookData = fs.readFileSync("1-json.json").toString();
console.log(bookData.toString());

const parsedData = JSON.parse(bookData);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
console.log(parsedData.author);

const validator = require("validator");
const getNotes = require("./notes.js");

// fs.writeFileSync("notes.txt", "This file was created by Node JS\n");
// fs.appendFileSync("notes.txt", "Hello World!");

const message = getNotes();

console.log(message);
console.log(validator.isEmail("mr.gipsy@gmail.com"));
console.log(validator.isURL("htt//handdrawngoods.com"));

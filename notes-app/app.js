const fs = require("fs");
const getNotes = require("./notes.js");

// fs.writeFileSync("notes.txt", "This file was created by Node JS\n");
// fs.appendFileSync("notes.txt", "Hello World!");

const message = getNotes();

console.log(message);

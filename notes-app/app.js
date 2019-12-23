const fs = require("fs");

fs.writeFileSync("notes.txt", "This file was created by Node JS\n");
fs.appendFileSync("notes.txt", "Hello World!");

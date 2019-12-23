const chalk = require("chalk");
const getNotes = require("./notes.js");

console.log(
  chalk.green.bold("To Be ") +
    chalk.blueBright.dim("or ") +
    chalk.redBright.underline("Not To Be")
);

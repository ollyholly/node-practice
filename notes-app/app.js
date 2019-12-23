const chalk = require("chalk");
const getNotes = require("./notes.js");

const command = process.argv[2];

if (command) {
  console.log(chalk.green("Your command is " + chalk.magenta(command)));
} else {
  console.log(chalk.red("No command given!"));
}

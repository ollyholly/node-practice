const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: () => {
    console.log("Adding a new note!");
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note!");
  }
});

yargs.command({
  command: "list",
  describe: "Display a list of notes",
  handler: () => {
    console.log("Here's your list of notes!");
  }
});

yargs.command({
  command: "read",
  describe: "Read a single note",
  handler: () => {
    console.log("Reading a note.");
  }
});

console.log(yargs.argv);

// if (command === "add") {
//   console.log("Adding new note!");
// } else if (command === "remove") {
//   console.log("Removing note!");
// }

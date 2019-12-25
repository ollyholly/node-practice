const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("Note added successfully!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const foundNote = notes.find(note => note.title === title);
  if (foundNote) {
    console.log(chalk.blue("\nHere's your note:"));
    console.log(chalk.grey("\nTitle: ") + foundNote.title);
    console.log(chalk.grey("Body: ") + foundNote.body + "\n");
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const removeNote = title => {
  try {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);

    if (filteredNotes.length < notes.length) {
      console.log(chalk.green.inverse("Note was successfully removed!"));
      saveNotes(filteredNotes);
    } else {
      console.log(chalk.red.inverse("Note was not found!"));
    }
  } catch (error) {
    console.log("Something went", error);
  }
};

const listNotes = () => {
  try {
    const notes = loadNotes();
    console.log(chalk.blue.bold("\nHere are you notes:\n"));
    notes.forEach(note => {
      console.log(chalk.grey("> ") + note.title);
      // console.log(chalk.grey("\nBody: ") + note.body + "\n\n--");
    });
  } catch (error) {
    console.log(chalk.red.inverse("Something went"), error);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};

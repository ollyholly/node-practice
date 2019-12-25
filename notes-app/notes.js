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
  const duplicateNotes = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("Note added successfully!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = title => {
  try {
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => {
      return note.title !== title;
    });

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

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};

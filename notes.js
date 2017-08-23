console.log('notes.js works!!!');

module.exports.age = 25;

const fs = require('fs')

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    }
    catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title ===  title);
    
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
    }

};






var removeNote = (title) => {
    var notes = fetchNotes();
    var note = {
        title
    };
    var filteredNotes = notes.filter((note) => note.title !==  title);

    if (filteredNotes.length !== notes.length) {
        saveNotes(filteredNotes);
        return note;
    } else {
        
    }

};

var listNote = () => {
    console.log('Getting all notes..');
};

var readNote = (title) => {
    console.log('Reading Post: ', title);
};

module.exports = {
    addNote,
    removeNote,
    listNote,
    readNote
};



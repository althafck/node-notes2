console.log('notes.js works!!!');

module.exports.age = 25;

var addNote = (title, body) => {
    console.log('Adding Note: ', title, body);
};

var removeNote = (title) => {
    console.log('Post being removed: ', title);
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



console.log('app.js is running');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Process: ', process.argv);  
console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('-----');
        console.log('Your note has been saved');
        console.log('-----');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('-----');
        console.log('A note with the same title already exists. Please try a different title.'); 
        console.log('-----');
    }
} else if(command === 'list') {
    notes.listNote();
} else if(command === 'read') {
    notes.readNote(argv.title);
} else if(command === 'remove' || command === 'delete') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Your note has been Deleted' : 'No notes match the given title.';
    console.log(message);
    // if (note) {
    //     console.log('-----');
    //     console.log('Your note has been Deleted');
    //     console.log('-----');
    //     console.log(`Title: ${note.title}`);
    // } else {
    //     console.log('-----');
    //     console.log('No notes match the given title.'); 
    //     console.log('-----');
    // }
} else {
    console.log('Command not recognized');
}


     
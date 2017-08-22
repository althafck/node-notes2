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
    notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
    notes.listNote();
} else if(command === 'read') {
    notes.readNote(argv.title);
} else if(command === 'remove' || command === 'delete') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}


     
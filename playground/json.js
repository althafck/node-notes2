// var obj = {
//     name: 'althaf'
// };
// var stringObj = JSON.stringify(obj); 
// console.log(typeof stringObj);
// console.log(stringObj);

//  var javaObj = JSON.parse(stringObj);
//  console.log(typeof javaObj);
//  console.log(javaObj);

//  var jsonObj1 = '{"name": "althaf", "age":25}';
//  console.log(typeof jsonObj1);
//  console.log(jsonObj1);

//  var jsonObj2 = JSON.parse(jsonObj1);
//  console.log(typeof jsonObj2);
//  console.log(jsonObj2);


const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);



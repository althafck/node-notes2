console.log('app.js is running');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var myArray1 = ['apple','orange','mango','banana','green apple','apple', 'orange', 'banana', 'banana', 'grapes'];
var removeDuplicates = _.uniq(myArray1);
console.log(removeDuplicates);

// console.log(_.isString(true));
// console.log(_.isString('althaf'));


// var user = os.userInfo();
// var cpu = os.cpus();

// var result = notes.addNumbers(5,10);
// console.log('Result: ' + result);

// fs.appendFile('notes1.txt', ' hello ' + user.username + ' you are ' + notes.age + '', function(err) {
//     if (err) {
//         console.log('test failed..');
//     }
// });

// fs.appendFile('sysinfo.txt', cpu[0].model, function(err) {
//     if (err) {
//         console.log('test failed..');
//     }
// });
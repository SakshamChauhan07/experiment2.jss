const fs = require('fs');

// Create / Write
fs.writeFileSync('student.txt', 'B.Tech Node.js Lab');

// Read
const data = fs.readFileSync('student.txt', 'utf8');

console.log(data);

// Write / Update
fs.writeFileSync('student.txt', 'Name: Optimus Prime\nSubject: Full Stack Development');

console.log('File created successfully');

// Append / Update
fs.appendFileSync('student.txt', '\nExperiment 2 completed.');

console.log('File updated');

// Read updated file
const updatedData = fs.readFileSync('student.txt', 'utf8');

console.log(updatedData);
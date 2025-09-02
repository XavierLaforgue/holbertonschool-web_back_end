#!/usr/bin/node
const { createInterface } = require('node:readline');

const readInput = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInput.question('Welcome to Holberton School, what is your name?',
  (answer) => {
    console.log(`Your name is: ${answer}`);
    readInput.close();
    console.log('This important software is now closing');
  });

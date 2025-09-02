#!/usr/bin/node
const { spawn } = require('node:child_process');
const { createInterface } = require('node:readline');

function askName() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    console.log(`Your name is: ${answer}`);
    rl.close();
  });
}

if (process.argv[2] === 'child') {
  askName();
} else {
  const child = spawn(process.execPath, [__filename, 'child'], {
    stdio: 'inherit',
  });
  child.on('exit', () => {
    console.log('This important software is now closing');
  });
}

#!/usr/bin/node
process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  let response = '';
  const input = process.stdin.read();
  if (input !== null) {
    response = input;
    process.stdout.write(`Your name is: ${response}`);
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

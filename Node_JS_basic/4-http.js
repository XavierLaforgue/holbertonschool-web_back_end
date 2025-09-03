const app = require('node:http');

const port = 1245;

const server = app.createServer((_, res) => {
  res.write('Hello Holberton School!');
});

server.listen(port);

module.exports = app;

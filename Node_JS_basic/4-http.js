const http = require('node:http');

const port = 1245;

const app = http.createServer((_, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;

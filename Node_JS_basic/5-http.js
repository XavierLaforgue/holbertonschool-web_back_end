const http = require('http');
const fsPromises = require('node:fs/promises');

function returnCountStudents(aPath) {
  const file = fsPromises.readFile(aPath, { encoding: 'utf8' });
  return file.then((fileResponse) => {
    const linesArray = fileResponse.split('\n');
    const studentsArray = linesArray
      .slice(1, -1).filter((line) => line.trim().length !== 0)
      .map((line) => line.split(','))
      .map((student) => student.map((property) => property.trim()));
    const studentsFields = new Map();
    const outputString = [`Number of students: ${studentsArray.length}`];
    // console.log(outputString);
    for (const student of studentsArray) {
      if (!studentsFields.has(student[3])) {
        studentsFields.set(student[3], [student[0]]);
      } else {
        studentsFields.get(student[3]).push(student[0]);
      }
    }
    for (const [field, students] of studentsFields.entries()) {
      const outputString2 = `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
      outputString.push(`${outputString2}`);
      // console.log(outputString2);
    }
    // console.log(outputString.join('\n'));
    return outputString.join('\n');
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    returnCountStudents(process.argv[2]).then((string) => response.end(string)).catch(() => {
      response.end('Cannot load the database');
    });
  } else {
    response.statusCode = 404;
    response.end('Not found');
  }
});
const PORT = 1245;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
  // console.log(`Server running at http://${HOST}:${PORT}`);
});

module.exports = app;

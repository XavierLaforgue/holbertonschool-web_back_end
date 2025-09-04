const express = require('express');
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

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  returnCountStudents(process.argv[2])
    .then((string) => {
      res.status(200).write('This is the list of our students\n');
      res.status(200).write(string);
      res.end();
    })
    .catch(() => {
      res.status(500).write('Cannot load the database');
      res.end();
    });
});

app.listen(port, () => {
  // console.log(`Listening app on port ${port}`);
});

module.exports = app;

const fs = require('fs');
const readline = require('node:readline');

function countStudents(aPath) {
  let file;
  try {
    file = readline.createInterface({
      input: fs.createReadStream(aPath, { start: 1, encoding: 'utf8' }),
      terminal: false,
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  let isFirstLine = true;
  let numberStudents = 0;
  const studentsFields = new Map();
  file.on('line', (line) => {
    if (isFirstLine || line.trim() === '') {
      isFirstLine = false;
      return;
    }
    numberStudents += 1;
    const student = line.split(',');
    if (!studentsFields.has(student[3])) {
      studentsFields.set(student[3], [student[0]]);
    } else {
      studentsFields.get(student[3]).push(student[0]);
    }
  });
  file.on('error', () => {
    throw new Error('Cannot load the database');
  });
  file.on('close', () => {
    console.log(`Number of students: ${numberStudents}`);
    for (const [field, students] of studentsFields.entries()) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  });
}

module.exports = countStudents;

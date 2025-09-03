const fsPromises = require('node:fs/promises');

function countStudents(aPath) {
  let file;
  try {
    file = fsPromises.readFile(aPath, { encoding: 'utf8' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  file.then((fileResponse) => {
    const linesArray = fileResponse.split('\n');
    const studentsArray = linesArray
      .slice(1, -1).filter((line) => line.trim().length !== 0)
      .map((line) => line.split(','))
      .map((student) => student.map((property) => property.trim()));
    const studentsFields = new Map();
    console.log(`Number of students: ${studentsArray.length}`);
    for (const student of studentsArray) {
      if (!studentsFields.has(student[3])) {
        studentsFields.set(student[3], [student[0]]);
      } else {
        studentsFields.get(student[3]).push(student[0]);
      }
    }
    for (const [field, students] of studentsFields.entries()) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
  return file;
}

module.exports = countStudents;

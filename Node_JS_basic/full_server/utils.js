import fs from 'node:fs/promises';

export default function readDatabase(path) {
  const database = fs.readFile(path, { encoding: 'utf8' });
  return database.then((readData) => {
    const linesArray = readData.split('\n');
    const studentsArray = linesArray
      .slice(1, -1).filter((line) => line.trim().length !== 0)
      .map((line) => line.split(','))
      .map((student) => student.map((property) => property.trim()));
    const studentsFields = {};
    for (const student of studentsArray) {
      if (!(student[3] in studentsFields)) {
        studentsFields[student[3]] = [student[0]];
      } else {
        studentsFields[student[3]].push(student[0]);
      }
    }
    return studentsFields;
  }).catch(() => {
    throw new Error('Cannot load the database');
  });
}

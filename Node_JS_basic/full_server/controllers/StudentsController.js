import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const output = ['This is the list of our students'];
    readDatabase(process.argv[2])
      .then((readData) => {
        for (const field of Object.keys(readData).sort()) {
          output.push(`Number of students in ${field}: ${readData[field].length}. List: ${readData[field].join(', ')}`);
        }
        response.status(200).send(output.join('\n'));
      })
      .catch((err) => response.status(500).send(err.message));
  }

  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((readData) => {
          response.status(200).send(`List: ${readData[request.params.major].join(', ')}`);
        })
        .catch((err) => response.status(500).send(err.message));
    }
  }
}

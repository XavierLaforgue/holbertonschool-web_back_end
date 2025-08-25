export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  const studentsInCity = studentArray.filter((student) => student.location === city);
  return studentsInCity.map((student) => (
    {
      ...student,
      grade: student.id === newGrades.studentId ? newGrades.grade : 'N/A',
    }
  ));
}

export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  const studentsInCity = studentArray.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const gradedStudent = newGrades.filter((newGrade) => newGrade.studentId === student.id);
    return {
      ...student,
      grade: (gradedStudent.length === 0) ? 'N/A' : gradedStudent[0].grade,
    };
  });
}

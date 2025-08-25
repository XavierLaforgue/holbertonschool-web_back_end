export default function getStudentIdsSum(studentArray) {
  return studentArray.reduce((sum, studentArray) => sum + studentArray.id, 0);
}

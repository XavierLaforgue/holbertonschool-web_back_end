export default function getListStudentIds(objArray) {
  if (!(objArray instanceof Array)) {
    return [];
  }
  return objArray.map((arrayElement) => arrayElement.id);
}

export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.getOwnPropertyNames(employeesList).length;
    },
  };
  return report;
}

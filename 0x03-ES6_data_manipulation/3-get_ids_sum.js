/**
 * getStudentIdsSum - Returns the sum of all student ids
 * @param {array} getListStudents - Array of students
 * @returns
 */
export default function getStudentIdsSum(getListStudents) {
  // Check if getListStudents is an array, if not, return an empty array
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  // Sum all the student ids using reduce function and return the sum
  return getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
}

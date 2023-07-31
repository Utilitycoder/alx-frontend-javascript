/**
 * getListStudentIds - Returns an array of student ids
 * @param {Array} getListStudents - Array of students
 * @returns studentIds - Array of student ids
 */
export default function getListStudentIds(getListStudents) {
  // Check if getListStudents is an array, if not, return an empty array
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  // Map through the array of students and return the student ids
  const studentIds = getListStudents.map((student) => student.id);
  return studentIds;
}

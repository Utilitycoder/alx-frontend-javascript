export default function getStudentsByLocation(getListStudents, city) {
  // Check if getListStudents is an array, if not, return an empty array
  if (!Array.isArray(getListStudents)) {
    return [];
  }

  // Filter through the array of students and return the students from the given city
  const studentsByLocation = getListStudents.filter((student) => student.location === city);
  return studentsByLocation;
}

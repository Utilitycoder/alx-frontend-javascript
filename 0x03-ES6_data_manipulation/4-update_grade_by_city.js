/**
 * 
 * @param {Array} getListStudents - Array of students
 * @param {string} city - City to filter by
 * @param {Array} newGrades - Array of objects with studentId and grade
 * @returns {Array} - Array of updated students
 */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
    // Check if getListStudents is an array, if not, return an empty array
    if (!Array.isArray(getListStudents)) {
        return [];
    }

    // Filter through the array of students and return the students from the given city
    const studentsByLocation = getListStudents.filter((student) => student.location === city);

    // Map through the array of students and update their grade
    const updatedStudents = studentsByLocation.map((student) => {
        // Find the student's grade from the newGrades array
        const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
        const updatedStudent = student;
        // If the student's grade is found, update the student's grade, otherwise, set the student's grade to 'N/A'
        if (studentGrade) {
            updatedStudent.grade = studentGrade.grade;
        } else {
            updatedStudent.grade = 'N/A';
        }
        return updatedStudent;
    });

    return updatedStudents;
}
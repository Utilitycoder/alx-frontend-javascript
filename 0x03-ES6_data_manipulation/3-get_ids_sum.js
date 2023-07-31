export default function getStudentIdsSum(getListStudents) {
    // Check if getListStudents is an array, if not, return an empty array
    if (!Array.isArray(getListStudents)) {
        return [];
    }

    // Sum all the student ids using reduce function.
    const studentIdsSum = getListStudents.reduce((accumulator, student) => accumulator + student.id, 0);
    return studentIdsSum;
}
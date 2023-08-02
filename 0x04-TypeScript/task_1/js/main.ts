interface ITeacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
}

const teacher1: ITeacher = {
    firstName: 'Lawal',
    lastName: 'Abubakar',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Lagos'
};

console.log(teacher1);
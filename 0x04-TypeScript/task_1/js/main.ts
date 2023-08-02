interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
};

const teacher1: Teacher = {
    firstName: 'Lawal',
    lastName: 'Abubakar',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Lagos'
};

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Mike',
    lastName: 'Okafor',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: 'Abuja',
    numberOfReports: 4
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}


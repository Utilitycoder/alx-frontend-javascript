interface IStudent {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Lawal: IStudent = {
    firstName: 'Lawal',
    lastName: 'Abubakar',
    age: 28,
    location: 'Lagos'
};

const Mike: IStudent = {
    firstName: 'Mike',
    lastName: 'Okafor',
    age: 24,
    location: 'Abuja'
};

const studentsList: Array<IStudent> = [Lawal, Mike];

const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');
const td1 = document.createElement('td');

body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
thead.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);

th1.innerHTML = 'first name';
th2.innerHTML = 'location';

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;
});
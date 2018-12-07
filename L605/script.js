var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123' },
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124' },
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125' }
];


displayStudentsTable(students);


function displayStudentsTable(studentList) {
    table = document.getElementById('student-table');

    for (let student of studentList) {

        let row = document.createElement('tr');
        let html = `
            <td>${student.FirstName}</td> 
            <td>${student.LastName}</td>
            <td>${student.PersonalNumber}</td>`;

        row.innerHTML = html;

        table.appendChild(row);
    }
}





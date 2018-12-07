let id=prompt('შეიყვანეთ id:');

let student = document.querySelector(`div[data-student-id="${id}"]`);

if(student != null) {
    student.style.backgroundColor = 'green';
}
else{
    alert('ვერ მოიძებნა!')
}
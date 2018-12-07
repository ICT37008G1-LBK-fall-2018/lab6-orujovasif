let list = document.getElementById('student-list');


let name = prompt('name: ');

while(name != null && name != ''){
    let item = document.createElement('li');

    item.textContent = name;

    list.appendChild(item);

    name = prompt('name: ');
}
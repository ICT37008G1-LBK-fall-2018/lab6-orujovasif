let container = document.getElementById('container');

 insertAfter(container);


function insertAfter(container){
    while(container.firstChild!=null){
        container.insertAfter(container.firstChild);
    }
}
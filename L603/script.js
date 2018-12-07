let container = document.getElementById('container');

removeChildren(container);


function removeChildren(container){
    while(container.firstChild!=null){
        container.removeChild(container.firstChild);
    }
}
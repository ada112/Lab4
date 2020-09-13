//docuemtn.getElementsByClassName("sumbitButton").addEventListener("click", newElement);

document.querySelector('#buttonSubmit').addEventListener('click', (e) =>{
    e.preventDefault();
    const item = document.querySelector('#newText');
    const newEl = document.createElement('div');
    newEl.classList.add('El-todo');
    const newcheck = document.createElement('input');
    newcheck.type = 'checkbox';
    newcheck.tagName = 'todo';
    const textNode = document.createTextNode(' '+ item.value)
    newEl.appendChild(newcheck);
    newEl.appendChild(textNode);
    document.querySelector('#newlistEl').append(newEl);
    item.value = ' ';

})

document.querySelector('#mark-checks').addEventListener('click', (e) => {
    var marks = document.querySelectorAll('input[type=checkbox]');

    for(var i = 0; i < marks.length; i++){
        marks[i].checked = true;
    }

})
document.querySelector('#clear-checks').addEventListener('click', () => {
    var marks = document.querySelectorAll('input[type=checkbox]');

    for(var i = 0; i < marks.length; i++){
        marks[i].checked = false;
    }

})

document.querySelector('#remove-checks').addEventListener('click', () =>{
    document.querySelector('#newlistEl').innerHTML = ' ';
})


const addForm = document.querySelector('#add-form');
const input = document.querySelector('#add-form input');
const addBtn = document.querySelector('#add-form button');

addBtn.addEventListener('click', function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + input.valua + '</li>';
    input.valua = "";
    addForm.classList.add('d-none');
});



const btn = document.getElementById('add');
btn.innerHTML = '<b>Add new Task!</b>';

const list = document.querySelector('ul#list')
list.innerHTML = '<li>first Task!</li>';
list.innerHTML += '<li>second Task!</li>';

btn.addEventListener("click", function(){
  // let task = prompt('Enter the task name');
  // list.innerHTML += '<li>' + task + '</li>';
  addForm.classList.remove('d-none');
});

btn.addEventListener("click", function(){
    let h1 = document.querySelector('h1');
    h1.style.color = "red";
    h1.style.backgroundColor = "#000"
});
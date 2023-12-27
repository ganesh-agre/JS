
const taskInput = document.querySelector('input');
const btnAdd = document.getElementsByName('add')[0];
const btnUpdate = document.getElementsByName('update')[0];
let currentSelecetdTaskForUpdation;

btnAdd.addEventListener('click',addNewTask);
btnUpdate.addEventListener('click',updateTask);
btnUpdate.style.display = 'none';

function addNewTask(e){     
    const newTask = taskInput.value;
    if (!newTask.trim().length) return;
    let tasksDiv = document.querySelector('.tasks');
    tasksDiv.innerHTML += `<div class="task">
                                <div class="taskTitle">${newTask}</div>
                                <div>
                                    <button onClick="onEdit(this)">Edit</button>
                                    <button onClick="onDelete(this)">Delete</button>
                                </div>
                            </div>`;
    taskInput.value = '';
}

function updateTask(e){
   
    currentSelecetdTaskForUpdation.innerHTML = taskInput.value;
    taskInput.value = '';
    btnUpdate.style.display = 'none';
    btnAdd.style.display ='inline';
}


function onEdit(currentTaskElement){
currentSelecetdTaskForUpdation = currentTaskElement.closest('.task').querySelector('.taskTitle');
  taskInput.value = currentSelecetdTaskForUpdation.innerHTML;
  btnAdd.style.display ='none';
  btnUpdate.style.display = 'inline';


}

function onDelete(currentTaskElement){
    currentTaskElement.closest('.task').remove();  
    btnUpdate.style.display = 'none';
    btnAdd.style.display ='inline';  
    taskInput.value = '';
}


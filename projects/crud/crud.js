const taskInput = document.querySelector("input");
const btnAdd = document.getElementsByName("add")[0];
const btnUpdate = document.getElementsByName("update")[0];
const tasksDiv = document.querySelector(".tasks");
let currentSelecetdTaskForUpdation;

btnAdd.addEventListener("click", addNewTask);
btnUpdate.addEventListener("click", updateTask);
btnUpdate.style.display = "none";

function addNewTask(e) {
  const newTask = taskInput.value;
  if (!newTask.trim().length) return;

  tasksDiv.innerHTML += `<div class="task">
                                <div class="taskTitle">${newTask}</div>
                                <div>
                                    <button onClick="onEdit(this)">Edit</button>
                                    <button onClick="onDelete(this)">Delete</button>
                                </div>
                            </div>`;
  taskInput.value = "";
}

function updateTask(e) {
  currentSelecetdTaskForUpdation.innerHTML = taskInput.value;
  taskInput.value = "";
  btnUpdate.style.display = "none";
  btnAdd.style.display = "inline";
}

function onEdit(currentTaskElement) {
  currentSelecetdTaskForUpdation = currentTaskElement
    .closest(".task")
    .querySelector(".taskTitle");
  taskInput.value = currentSelecetdTaskForUpdation.innerHTML;
  btnAdd.style.display = "none";
  btnUpdate.style.display = "inline";
}

function onDelete(currentTaskElement) {
  currentTaskElement.closest(".task").remove();
  btnUpdate.style.display = "none";
  btnAdd.style.display = "inline";
  taskInput.value = "";
}

function filterList(e) {
  let searchText = e.value;
  const allTasks = document.querySelectorAll(".task");
  sortBeforeFilter([...allTasks]);
  for (let index = 0; index < allTasks.length; index++) {
    const element = allTasks[index].querySelector(".taskTitle");
    const elementTitle = element.innerHTML;
    if (elementTitle.indexOf(searchText) > -1) {
      allTasks[index].style.display = "flex";
    } else {
      allTasks[index].style.display = "none";
    }
  }
}

function sortBeforeFilter(tasks) {
  //let taskCopy = tasks;
  tasks.sort((a, b) => {
    taska = a.querySelector(".taskTitle").innerText;
    taskb = b.querySelector(".taskTitle").innerText;
    return taska.localeCompare(taskb);
  });

  //tasksDiv.replaceChildren(...taskCopy, ...tasks);// this can also work
  tasksDiv.append(...tasks);
}

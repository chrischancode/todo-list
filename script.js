const taskInput = document.querySelector(".taskInput");
const taskList = document.querySelector(".taskList");
const btnAdd = document.querySelector(".btnAdd");

function completeTask(event) {
  const task = event.target;
  task.classList.toggle("completed");
}
function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
}

function addTask() {
  const text = taskInput.value;

  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    taskInput.value = "";

    li.addEventListener("click", completeTask);
    const delBtn = document.createElement("button");
    delBtn.classList.add("delbtn");
    delBtn.textContent = "delete";
    li.addEventListener("click", deleteTask);
    li.appendChild(delBtn);
  }
}

btnAdd.addEventListener("click", addTask);

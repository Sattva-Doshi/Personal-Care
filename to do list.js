const taskInput = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="deleteBtn">Done</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
    addDeleteListener(li);
  }else
  alert("Please Enter the Value !!!!");

}

function addDeleteListener(li) {
  const deleteBtn = li.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

}




const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const task = taskInput.value.trim();
  if (task === "") return;

  const listItem = createListItem(task);

  pendingList.appendChild(listItem);
  taskInput.value = "";
}

// ... Existing code ...

function createListItem(task) {
    const listItem = document.createElement("li");
    listItem.innerText = task;
  
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.className = "complete-btn";
    completeButton.onclick = () => completeTask(listItem);
  
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit-btn";
    editButton.onclick = () => editTask(listItem);
  
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = () => deleteTask(listItem);
  
    const buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(completeButton);
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);
  
    listItem.appendChild(buttonsContainer);
  
    return listItem;
  }
  
  // ... Existing code ...
  

function completeTask(taskItem) {
  const completeBtn = taskItem.querySelector(".complete-btn");
  if (completeBtn) {
    completeBtn.remove();
    taskItem.classList.add("completed");
    completedList.appendChild(taskItem);
  }
}

function editTask(taskItem) {
  const taskName = taskItem.innerText;
  const updatedTask = prompt("Edit the task:", taskName);
  if (updatedTask !== null && updatedTask.trim() !== "") {
    taskItem.innerText = updatedTask;
  }
}

function deleteTask(taskItem) {
  taskItem.remove();
}

// Event listener for Enter key
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

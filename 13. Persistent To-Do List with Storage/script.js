const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  createTaskElement(taskText, false); // not completed initially
  saveTask(taskText, false);

  taskInput.value = "";
  taskInput.focus();
}

// Create <li> element and attach listeners
function createTaskElement(text, completed) {
  const li = document.createElement("li");
  li.textContent = text;

  if (completed) li.classList.add("completed");

  // Toggle completion
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateStorage();
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateStorage();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// Save a single task to localStorage
function saveTask(text, completed) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Reload tasks from storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(({ text, completed }) => {
    createTaskElement(text, completed);
  });
}

// Rewrites storage based on current DOM (after delete or toggle)
function updateStorage() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].textContent,
      completed: li.classList.contains("completed"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

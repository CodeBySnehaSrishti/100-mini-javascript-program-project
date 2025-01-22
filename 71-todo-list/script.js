// script.js
document.addEventListener("DOMContentLoaded", loadTasks);
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", modifyTask);
function showMessage(text, type = "error") {
  message.textContent = text;
  message.style.color = type === "error" ? "#e74c3c" : "#4CAF50";
  message.classList.remove("hidden");
  setTimeout(() => message.classList.add("hidden"), 2000);
}
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => renderTask(task.text, task.completed));
}
function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    showMessage("Please enter a task.");
    return;
  }
  renderTask(taskText, false);
  saveTask(taskText, false);
  taskInput.value = "";
  showMessage("Task added successfully!", "success");
}
function renderTask(text, completed) {
  const li = document.createElement("li");
  li.className = completed ? "task-completed" : "";

  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  taskList.appendChild(li);
  li.addEventListener("click", () => {
    li.classList.toggle("task-completed");
    toggleCompletion(text);
  });
}
function saveTask(text, completed) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text, completed });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function toggleCompletion(text) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.map(task => 
    task.text === text ? { ...task, completed: !task.completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
function modifyTask(e) {
  if (e.target.classList.contains("delete-btn")) {
    const li = e.target.parentElement.parentElement;
    const taskText = li.querySelector("span").innerText;
    li.remove();
    deleteTask(taskText);
    showMessage("Task deleted successfully!", "success");
  }
}
function deleteTask(text) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(task => task.text !== text);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

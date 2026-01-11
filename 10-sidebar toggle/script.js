const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector(".content");

// Toggle the sidebar open/closed
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  content.classList.toggle("shift");

  // Update button text/icon
  toggleBtn.textContent = sidebar.classList.contains("open") ? "✖" : "☰";
});

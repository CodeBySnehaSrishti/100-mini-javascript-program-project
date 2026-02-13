const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
  const percent = parseInt(skill.getAttribute("data-percent"), 10);
  const circle = skill.querySelector(".circular-progress");
  const percentage = skill.querySelector(".percentage");
  let currentPercent = 0;

  // Animation logic
  const interval = setInterval(() => {
    currentPercent++;
    percentage.textContent = `${currentPercent}%`;

    circle.style.background = `conic-gradient(
      #ff4d6d 0deg,
      #a04eff ${currentPercent * 3.6}deg,
      #eaeaea ${currentPercent * 3.6}deg
    )`;

    if (currentPercent === percent) {
      clearInterval(interval);
    }
  }, 20); // Speed of animation
});
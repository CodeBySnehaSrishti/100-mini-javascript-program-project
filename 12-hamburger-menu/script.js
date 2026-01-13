const hamburger = document.getElementById('hamburger');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  const isActive = navLinks.classList.toggle('active');
  menuIcon.style.display = isActive ? 'none' : 'block';
  closeIcon.style.display = isActive ? 'block' : 'none';
});





// script.js
const slides = document.querySelectorAll('.testimonial-slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
// Initialize first slide
showSlide(currentIndex);

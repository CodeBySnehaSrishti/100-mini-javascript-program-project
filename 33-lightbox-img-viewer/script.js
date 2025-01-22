const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;
// Open Lightbox
function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImage.src = images[currentIndex].src;
}
// Close Lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}
// Change Image
function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
}

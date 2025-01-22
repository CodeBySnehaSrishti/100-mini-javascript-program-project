const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 1; // Start at the first actual image
const totalImages = images.length - 2; // Exclude cloned images

// Set the initial position
track.style.transform = `translateX(-${currentIndex * images[0].clientWidth}px)`;

// Update the carousel smoothly
function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Jump to the correct position without transition
function jumpToIndex(index) {
    const width = images[0].clientWidth;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${index * width}px)`;
}

// Move to the next image
nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();

    // Jump back to the first image clone after the last actual image
    if (currentIndex === totalImages + 1) {
        setTimeout(() => {
            currentIndex = 1;
            jumpToIndex(currentIndex);
        }, 500); // Match the transition duration
    }
});

// Move to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();

    // Jump to the last image clone after the first actual image
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalImages;
            jumpToIndex(currentIndex);
        }, 500); // Match the transition duration
    }
});

// Auto-slide functionality
setInterval(() => {
    currentIndex++;
    updateCarousel();

    if (currentIndex === totalImages + 1) {
        setTimeout(() => {
            currentIndex = 1;
            jumpToIndex(currentIndex);
        }, 500);
    }
}, 5000);

// Adjust carousel on window resize
window.addEventListener('resize', () => {
    jumpToIndex(currentIndex);
});

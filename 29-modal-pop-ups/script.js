// Select elements
const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');

// Open Modal
openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// Close Modal on button click
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// Close Modal on overlay click
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});
const dropZone = document.getElementById('drop-zone');
const preview = document.getElementById('preview');
// Handle file preview
function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                const container = document.createElement('div');
                container.classList.add('image-container');
                const img = document.createElement('img');
                img.src = reader.result;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '×';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.addEventListener('click', () => container.remove());
                container.appendChild(img);
                container.appendChild(deleteBtn);
                preview.appendChild(container);
            };
            reader.readAsDataURL(file);
        }
    });
}
// Drag and Drop Events
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragging');
});
dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragging');
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragging');
    const files = e.dataTransfer.files; // Get dropped files
    handleFiles(files);
});

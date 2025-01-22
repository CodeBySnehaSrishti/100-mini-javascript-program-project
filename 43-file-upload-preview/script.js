const fileInput = document.getElementById('fileInput');
const filePreview = document.getElementById('filePreview');

fileInput.addEventListener('change', function () {
    const files = fileInput.files;
    filePreview.innerHTML = ''; // Clear previous previews

    if (files.length === 0) {
        filePreview.style.display = 'none';
        return;
    }

    for (const file of files) {
        if (!file.type.startsWith('image/')) continue;

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;

            const fileName = document.createElement('span');
            fileName.textContent = file.name;

            filePreview.appendChild(img);
            filePreview.appendChild(fileName);
        };
        reader.readAsDataURL(file);
    }

    filePreview.style.display = 'block';
});

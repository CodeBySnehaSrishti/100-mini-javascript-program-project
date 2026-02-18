function createAlert(title, message, type) {
    const alertContainer = document.getElementById('alert-container');
    // Create alert box
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box', type);
    // Add content
    alertBox.innerHTML = `
        <div>
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
        <button class="close-btn" onclick="closeAlert(this)">×</button>
    `;
    // Append to container
    alertContainer.appendChild(alertBox);
    // Auto-remove after 5 seconds
    setTimeout(() => {
        alertBox.style.opacity = '0';
        setTimeout(() => alertBox.remove(), 300);
    }, 3000);
}
function closeAlert(button) {
    const alertBox = button.parentElement;
    alertBox.style.opacity = '0';
    setTimeout(() => alertBox.remove(), 300);
}

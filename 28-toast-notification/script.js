document.addEventListener('DOMContentLoaded', () => {
    const toast = document.getElementById('toast');
    const showToastButton = document.getElementById('showToast');
    // Function to show the toast notification
    const showToast = () => {
        toast.classList.remove('hidden');
        toast.classList.add('show');
        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hidden');
        }, 3000);
    };
    // Add event listener to the button
    showToastButton.addEventListener('click', showToast);
});





















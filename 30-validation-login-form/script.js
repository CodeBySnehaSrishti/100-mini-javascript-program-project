document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    // Predefined credentials for validation
    const validUsername = 'username';
    const validPassword = 'password';
    if (username === validUsername && password === validPassword) {
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        error.textContent = 'Invalid username or password!';
        error.style.display = 'block';
    }
});

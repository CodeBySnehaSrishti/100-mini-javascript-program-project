document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    let strength = 0;
    if (password.length >= 8) strength++; // Minimum length
    if (/[A-Z]/.test(password)) strength++; // Uppercase letter
    if (/[a-z]/.test(password)) strength++; // Lowercase letter
    if (/[0-9]/.test(password)) strength++; // Digit
    if (/[\W_]/.test(password)) strength++; // Special character
    switch (strength) {
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.background = 'red';
            strengthText.textContent = 'Very Weak';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.background = 'orange';
            strengthText.textContent = 'Weak';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.background = 'yellow';
            strengthText.textContent = 'Moderate';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.background = 'lightgreen';
            strengthText.textContent = 'Strong';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.background = 'green';
            strengthText.textContent = 'Very Strong';
            break;
        default:
            strengthBar.style.width = '0%';
            strengthText.textContent = '';
    }
});
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Signup successful!');
    }
});

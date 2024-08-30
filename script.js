document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Mock validation for demonstration
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html'; // Redirect to another page
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

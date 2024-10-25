// Function to handle login form submission
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form'); // Select the login form

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (username === '' || password === '') {
                alert('Please fill in both fields.');
            } else {
                // Here you can add more complex validation or AJAX requests
                alert('Login successful! Welcome, ' + username + '!');
                // Optionally, you could redirect to another page after a successful login
                // window.location.href = 'index.html'; // Redirect to home page
            }
        });
    }
});
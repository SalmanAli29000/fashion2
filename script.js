const scriptURL = 'https://script.google.com/macros/s/AKfycbyVNL3andYYzKR1IgtKOas1CqFYg491sYbFwnivRWpDuWvwZdVsvqQjyDTSPulXMHcedA/exec'; // Replace with your Google Apps Script URL

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'signup', username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('signup-message').innerText = data.message;
        if (data.success) {
            // Redirect with the username as a query parameter
            window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
        }
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-password').value = '';
    })
    .catch(error => console.error('Error:', error));
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'login', username, password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('login-message').innerText = data.message;
        if (data.success) {
            // Redirect with the username as a query parameter
            window.location.href = `welcome.html?username=${encodeURIComponent(username)}`;
        }
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    })
    .catch(error => console.error('Error:', error));
}

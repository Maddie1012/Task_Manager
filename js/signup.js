// signup.js
const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (email && password && confirmPassword) {
    if (password!== confirmPassword) {
      message.textContent = 'Passwords do not match';
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];

      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        message.textContent = 'User already exists';
      } else {
        const newUser = {
          email,
          password,
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        message.textContent = 'User created successfully';
        // Redirect to login page or dashboard
        window.location.href = './login.html';
      }
    }
  } else {
    message.textContent = 'Please enter all fields';
  }
});
const loginPattern = /^[A-Za-z0-9]{6,}$/;

function showLoginError(input, isValid, message) {
  const error = input.closest('.form-group')?.querySelector('.error-message');
  input.classList.toggle('invalid', !isValid);
  if (error) {
    error.textContent = message;
    error.classList.toggle('show', !isValid);
  }
  return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');
    const validUsername = username && showLoginError(username, loginPattern.test(username.value), 'Invalid username format.');
    const validPassword = password && showLoginError(password, loginPattern.test(password.value), 'Invalid password format.');

    if (validUsername && validPassword) {
      alert('Login successful!');
      form.reset();
    }
  });
});

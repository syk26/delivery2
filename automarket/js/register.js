const registrationPatterns = {
  name: /^[A-Za-z\s]+$/,
  address: /^[A-Za-z0-9\s]+$/,
  phone: /^1[3-9]\d{9}$/,
  email: /^[^\s@]+@[^\s@]+\.(cn|com)$/,
  username: /^[A-Za-z0-9]{6,}$/,
  password: /^[A-Za-z0-9]{6,}$/
};

function showRegistrationError(input, isValid, message) {
  const error = input.closest('.form-group')?.querySelector('.error-message');
  input.classList.toggle('invalid', !isValid);
  if (error) {
    error.textContent = message;
    error.classList.toggle('show', !isValid);
  }
  return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let valid = true;
    const fields = [
      ['name', registrationPatterns.name, 'Name must contain only alphabetical letters and spaces.'],
      ['address', registrationPatterns.address, 'Address must contain only alphanumeric characters and spaces.'],
      ['phone', registrationPatterns.phone, 'Phone number must be a valid China mobile number (11 digits starting with 1).'],
      ['email', registrationPatterns.email, 'Email must contain @ exactly once and end with .cn or .com'],
      ['username', registrationPatterns.username, 'Username must be at least 6 alphanumeric characters.'],
      ['password', registrationPatterns.password, 'Password must be at least 6 alphanumeric characters.']
    ];

    fields.forEach(([id, pattern, message]) => {
      const input = document.getElementById(id);
      if (input && !showRegistrationError(input, pattern.test(input.value), message)) valid = false;
    });

    if (valid) {
      alert('Registration successful!');
      form.reset();
    }
  });
});

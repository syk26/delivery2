const addCarPatterns = { year: /^\d{4}$/, price: /^\d+$/ };

function showAddCarError(input, isValid, message) {
  const error = input.closest('.form-group')?.querySelector('.error-message');
  input.classList.toggle('invalid', !isValid);
  if (error) {
    error.textContent = message;
    error.classList.toggle('show', !isValid);
  }
  return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('add-car-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = {
      colour: document.getElementById('colour'),
      model: document.getElementById('model'),
      year: document.getElementById('year'),
      location: document.getElementById('location'),
      price: document.getElementById('price'),
      image: document.getElementById('image')
    };
    let valid = true;
    if (values.colour && !showAddCarError(values.colour, values.colour.value.trim() !== '', 'Please enter a colour.')) valid = false;
    if (values.model && !showAddCarError(values.model, values.model.value.trim() !== '', 'Please enter a model.')) valid = false;
    if (values.year && !showAddCarError(values.year, addCarPatterns.year.test(values.year.value), 'Please enter a valid 4-digit year.')) valid = false;
    if (values.location && !showAddCarError(values.location, values.location.value.trim() !== '', 'Please enter a location.')) valid = false;
    if (values.price && !showAddCarError(values.price, addCarPatterns.price.test(values.price.value), 'Please enter a valid price (numbers only).')) valid = false;
    if (values.image && !showAddCarError(values.image, values.image.files.length > 0, 'Please upload an image.')) valid = false;

    if (valid) {
      alert('Car added successfully!');
      form.reset();
    }
  });
});

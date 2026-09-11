// Car Sales Website - Main JavaScript
// GenAI Generated Code for Delivery 2

// Mock car data for search demonstration
const mockCars = [
  { id: 1, model: "Toyota Camry", year: "2020", color: "Silver", location: "Beijing", price: "180000", image: "https://via.placeholder.com/400x300?text=Toyota+Camry" },
  { id: 2, model: "Honda Accord", year: "2021", color: "Black", location: "Shanghai", price: "200000", image: "https://via.placeholder.com/400x300?text=Honda+Accord" },
  { id: 3, model: "BMW 3 Series", year: "2019", color: "White", location: "Guangzhou", price: "250000", image: "https://via.placeholder.com/400x300?text=BMW+3+Series" },
  { id: 4, model: "Audi A4", year: "2022", color: "Blue", location: "Beijing", price: "280000", image: "https://via.placeholder.com/400x300?text=Audi+A4" },
  { id: 5, model: "Toyota Camry", year: "2021", color: "Red", location: "Shenzhen", price: "190000", image: "https://via.placeholder.com/400x300?text=Toyota+Camry+2021" },
  { id: 6, model: "Mercedes C-Class", year: "2020", color: "Grey", location: "Shanghai", price: "300000", image: "https://via.placeholder.com/400x300?text=Mercedes+C-Class" }
];

// Validation Regex Patterns
const patterns = {
  name: /^[A-Za-z\s]+$/,
  address: /^[A-Za-z0-9\s]+$/,
  phone: /^1[3-9]\d{9}$/,
  email: /^[^\s@]+@[^\s@]+\.(cn|com)$/,
  username: /^[A-Za-z0-9]{6,}$/,
  password: /^[A-Za-z0-9]{6,}$/,
  price: /^\d+$/,
  year: /^\d{4}$/
};

// Helper function to show/hide error messages
function toggleError(input, isValid, message) {
  const formGroup = input.closest('.form-group');
  const errorElement = formGroup ? formGroup.querySelector('.error-message') : null;
  if (!isValid) {
    input.classList.add('invalid');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('show');
    }
    return false;
  } else {
    input.classList.remove('invalid');
    if (errorElement) {
      errorElement.classList.remove('show');
    }
    return true;
  }
}

// Validate Registration Form
document.addEventListener('DOMContentLoaded', function () {
  const regForm = document.getElementById('registration-form');
  if (regForm) {
    regForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;
      const name = document.getElementById('name');
      const address = document.getElementById('address');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');
      const username = document.getElementById('username');
      const password = document.getElementById('password');

      if (name && !toggleError(name, patterns.name.test(name.value), 'Name must contain only alphabetical letters and spaces.')) isValid = false;
      if (address && !toggleError(address, patterns.address.test(address.value), 'Address must contain only alphanumeric characters and spaces.')) isValid = false;
      if (phone && !toggleError(phone, patterns.phone.test(phone.value), 'Phone number must be a valid China mobile number (11 digits starting with 1).')) isValid = false;
      if (email && !toggleError(email, patterns.email.test(email.value), 'Email must contain @ exactly once and end with .cn or .com')) isValid = false;
      if (username && !toggleError(username, patterns.username.test(username.value), 'Username must be at least 6 alphanumeric characters.')) isValid = false;
      if (password && !toggleError(password, patterns.password.test(password.value), 'Password must be at least 6 alphanumeric characters.')) isValid = false;

      if (isValid) {
        alert('Registration successful!');
        regForm.reset();
      }
    });
  }

  // Validate Login Form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;
      const username = document.getElementById('login-username');
      const password = document.getElementById('login-password');

      if (username && !toggleError(username, patterns.username.test(username.value), 'Invalid username format.')) isValid = false;
      if (password && !toggleError(password, patterns.password.test(password.value), 'Invalid password format.')) isValid = false;

      if (isValid) {
        alert('Login successful!');
        loginForm.reset();
      }
    });
  }

  // Validate Add Car Form
  const carForm = document.getElementById('add-car-form');
  if (carForm) {
    carForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;
      const color = document.getElementById('colour');
      const model = document.getElementById('model');
      const year = document.getElementById('year');
      const location = document.getElementById('location');
      const price = document.getElementById('price');
      const image = document.getElementById('image');

      if (color && !toggleError(color, color.value.trim() !== '', 'Please enter a colour.')) isValid = false;
      if (model && !toggleError(model, model.value.trim() !== '', 'Please enter a model.')) isValid = false;
      if (year && !toggleError(year, patterns.year.test(year.value), 'Please enter a valid 4-digit year.')) isValid = false;
      if (location && !toggleError(location, location.value.trim() !== '', 'Please enter a location.')) isValid = false;
      if (price && !toggleError(price, patterns.price.test(price.value), 'Please enter a valid price (numbers only).')) isValid = false;
      if (image && !toggleError(image, image.value.trim() !== '', 'Please upload an image.')) isValid = false;

      if (isValid) {
        alert('Car added successfully!');
        carForm.reset();
      }
    });
  }

  // Search Functionality
  const searchBtn = document.getElementById('search-btn');
  const searchResults = document.getElementById('search-results');
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  // Allow Enter key to trigger search
  const searchModel = document.getElementById('search-model');
  const searchYear = document.getElementById('search-year');
  if (searchModel) {
    searchModel.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') performSearch();
    });
  }
  if (searchYear) {
    searchYear.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') performSearch();
    });
  }

  function performSearch() {
    const modelQuery = searchModel ? searchModel.value.toLowerCase().trim() : '';
    const yearQuery = searchYear ? searchYear.value.trim() : '';

    if (!modelQuery && !yearQuery) {
      alert('Please enter model or year to search.');
      return;
    }

    const results = mockCars.filter(car => {
      const matchModel = modelQuery ? car.model.toLowerCase().includes(modelQuery) : true;
      const matchYear = yearQuery ? car.year === yearQuery : true;
      return matchModel && matchYear;
    });
    displayResults(results);
  }

  function displayResults(results) {
    if (!searchResults) return;
    searchResults.innerHTML = '';
    if (results.length === 0) {
      searchResults.innerHTML = '<p style="text-align:center;padding:20px;">No cars found matching your search criteria.</p>';
      return;
    }
    results.forEach(car => {
      const carDiv = document.createElement('div');
      carDiv.className = 'car-item';
      carDiv.innerHTML = `
        <img src="${car.image}" alt="${car.model}">
        <div class="car-info">
          <h3>${car.model}</h3>
          <p>Year: ${car.year}</p>
          <p>Color: ${car.color}</p>
          <p>Location: ${car.location}</p>
          <p class="price">&yen;${car.price}</p>
        </div>
      `;
      carDiv.addEventListener('click', () => showCarDetails(car));
      searchResults.appendChild(carDiv);
    });
  }

  function showCarDetails(car) {
    const modal = document.getElementById('car-modal');
    const modalContent = document.getElementById('modal-body');
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <img src="${car.image}" alt="${car.model}" style="width:100%;border-radius:8px;margin-bottom:15px;">
        <h2>${car.model}</h2>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Location:</strong> ${car.location}</p>
        <p><strong>Price:</strong> <span style="color:#e74c3c;font-size:1.3rem;font-weight:bold;">&yen;${car.price}</span></p>
      `;
      modal.style.display = 'block';
    }
  }

  // Close modal
  const closeModal = document.querySelector('.close');
  const modal = document.getElementById('car-modal');
  if (closeModal && modal) {
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }
});

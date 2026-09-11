const searchCars = [
  { id: 1, model: 'Toyota Camry', year: '2020', color: 'Silver', location: 'Beijing', price: '180000', image: 'https://via.placeholder.com/400x300?text=Toyota+Camry' },
  { id: 2, model: 'Honda Accord', year: '2021', color: 'Black', location: 'Shanghai', price: '200000', image: 'https://via.placeholder.com/400x300?text=Honda+Accord' },
  { id: 3, model: 'BMW 3 Series', year: '2019', color: 'White', location: 'Guangzhou', price: '250000', image: 'https://via.placeholder.com/400x300?text=BMW+3+Series' },
  { id: 4, model: 'Audi A4', year: '2022', color: 'Blue', location: 'Beijing', price: '280000', image: 'https://via.placeholder.com/400x300?text=Audi+A4' },
  { id: 5, model: 'Toyota Camry', year: '2021', color: 'Red', location: 'Shenzhen', price: '190000', image: 'https://via.placeholder.com/400x300?text=Toyota+Camry+2021' },
  { id: 6, model: 'Mercedes C-Class', year: '2020', color: 'Grey', location: 'Shanghai', price: '300000', image: 'https://via.placeholder.com/400x300?text=Mercedes+C-Class' }
];

function renderSearchResults(results, container) {
  container.innerHTML = '';
  if (results.length === 0) {
    container.innerHTML = '<p class="empty-results">No cars found matching your search criteria.</p>';
    return;
  }

  results.forEach((car) => {
    const card = document.createElement('a');
    card.className = 'car-item';
    card.href = `car.html?id=${car.id}`;
    card.innerHTML = `
      <img src="${car.image}" alt="${car.model}">
      <div class="car-info">
        <h3>${car.model}</h3>
        <p>Year: ${car.year}</p>
        <p>Color: ${car.color}</p>
        <p>Location: ${car.location}</p>
        <p class="price">&yen;${car.price}</p>
      </div>`;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const modelInput = document.getElementById('search-model');
  const yearInput = document.getElementById('search-year');
  const button = document.getElementById('search-btn');
  const resultsContainer = document.getElementById('search-results');
  if (!modelInput || !yearInput || !button || !resultsContainer) return;

  const performSearch = () => {
    const model = modelInput.value.toLowerCase().trim();
    const year = yearInput.value.trim();
    if (!model && !year) {
      alert('Please enter model or year to search.');
      return;
    }
    const results = searchCars.filter((car) =>
      (!model || car.model.toLowerCase().includes(model)) && (!year || car.year === year)
    );
    renderSearchResults(results, resultsContainer);
  };

  button.addEventListener('click', performSearch);
  [modelInput, yearInput].forEach((input) => input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') performSearch();
  }));
});

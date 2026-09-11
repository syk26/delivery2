const detailCars = [
  { id: 1, model: 'Toyota Camry', year: '2020', color: 'Silver', location: 'Beijing', price: '180000', image: 'https://via.placeholder.com/900x500?text=Toyota+Camry' },
  { id: 2, model: 'Honda Accord', year: '2021', color: 'Black', location: 'Shanghai', price: '200000', image: 'https://via.placeholder.com/900x500?text=Honda+Accord' },
  { id: 3, model: 'BMW 3 Series', year: '2019', color: 'White', location: 'Guangzhou', price: '250000', image: 'https://via.placeholder.com/900x500?text=BMW+3+Series' },
  { id: 4, model: 'Audi A4', year: '2022', color: 'Blue', location: 'Beijing', price: '280000', image: 'https://via.placeholder.com/900x500?text=Audi+A4' },
  { id: 5, model: 'Toyota Camry', year: '2021', color: 'Red', location: 'Shenzhen', price: '190000', image: 'https://via.placeholder.com/900x500?text=Toyota+Camry+2021' },
  { id: 6, model: 'Mercedes C-Class', year: '2020', color: 'Grey', location: 'Shanghai', price: '300000', image: 'https://via.placeholder.com/900x500?text=Mercedes+C-Class' }
];

document.addEventListener('DOMContentLoaded', () => {
  const detail = document.getElementById('car-detail');
  const id = Number(new URLSearchParams(window.location.search).get('id'));
  const car = detailCars.find((item) => item.id === id) || detailCars[0];
  if (!detail) return;

  detail.innerHTML = `
    <img src="${car.image}" alt="${car.model}">
    <div class="car-detail-content">
      <h1>${car.model}</h1>
      <p><strong>Year:</strong> ${car.year}</p>
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Location:</strong> ${car.location}</p>
      <p class="price">&yen;${car.price}</p>
      <a class="btn" href="search.html">Back to Search</a>
    </div>`;
});

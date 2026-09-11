// Seller center interactions.
document.addEventListener('DOMContentLoaded', () => {
  const addCarLink = document.querySelector('a[href="add-car.html"]');
  if (addCarLink) addCarLink.setAttribute('aria-label', 'Add a new car listing');
});

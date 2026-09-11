// Shared card affordance used by the homepage feature cards.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const link = card.querySelector('a');
        if (link) link.click();
      }
    });
  });
});

let buttons = document.querySelectorAll('.btn');
let cards = document.querySelectorAll('.card');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    buttons.forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    displayCards(this.dataset.category);
  });
});

function displayCards(category) {
  cards.forEach(card => {
    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
  });
}
// Create an audio object for the sound effect
const hoverSound = new Audio('../../sounds/item-shop-item-hover.mp3');

// Select all elements with the class 'item'
const items = document.querySelectorAll('.item');

// Add event listeners to each item
items.forEach(item => {
  item.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0; // Reset sound to the beginning
    hoverSound.play();
  });

  item.addEventListener('click', () => {
    hoverSound.currentTime = 0; // Reset sound to the beginning
    hoverSound.play();
  });
});

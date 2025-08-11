const btn = document.getElementById('magicBtn');
const message = document.getElementById('message');

const colors = ['#fce4ec', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63'];

btn.addEventListener('click', () => {
  // Pick a random soft pink color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  // Show mushy message
  message.textContent = "You’re the sweetest thing! 💖🍬";
  message.style.opacity = '1';

  // Fade out after 3 seconds
  setTimeout(() => {
    message.style.opacity = '0';
  }, 3000);
});
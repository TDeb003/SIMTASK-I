// Retrieve DOM elements
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const directionSelect = document.getElementById('direction');
const container = document.querySelector('.container');

// Function to update background gradient
function updateBackground() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const direction = directionSelect.value;

  container.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

// Event listeners
color1Input.addEventListener('input', updateBackground);
color2Input.addEventListener('input', updateBackground);
directionSelect.addEventListener('change', updateBackground);
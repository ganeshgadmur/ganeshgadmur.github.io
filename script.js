// Typing effect
const typingText = "Hi, I'm G.Ganesh!";
let index = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // typing speed
  }
}
typeEffect();

// Live Clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // call once on load

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

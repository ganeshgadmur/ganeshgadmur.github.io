// Typing effect
const text = "Hi, I'm G.Ganesh";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Live clock
setInterval(() => {
  const clock = document.getElementById("clock");
  clock.textContent = new Date().toLocaleTimeString();
}, 1000);

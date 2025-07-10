// Typewriter effect
const text = "Tech Explorer | AI Learner | CSE@SRM";
let i = 0;
const speed = 60;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
function showOnScroll() {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      reveal.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", showOnScroll);

// Toggle Light/Dark Mode
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

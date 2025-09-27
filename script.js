// ================== PRELOADER ==================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const progressFill = document.getElementById("progressBarFill");
  let width = 0;
  const interval = setInterval(() => {
    width += 10;
    if (progressFill) progressFill.style.width = width + "%";
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  }, 200);
});

// Typing effect messages
const loaderTexts = [
  "Loading ideas...",
  "Building dreams...",
  "Unleashing creativity...",
  "Welcome to Kid Crafters!"
];
let i = 0;
function typingEffect() {
  const loaderText = document.querySelector("#preloader p");
  if (!loaderText) return;
  loaderText.textContent = loaderTexts[i];
  i = (i + 1) % loaderTexts.length;
}
setInterval(typingEffect, 2000);

// ================== DARK MODE ==================
const darkModeToggle = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  if (darkModeToggle) darkModeToggle.textContent = "☀️";
}
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeToggle.textContent = "🌙";
    }
  });
}

// ================== QUOTES ==================
const quotes = [
  "Dream big, start small, act now!",
  "Great ideas start with a spark ✨",
  "You’re never too young to innovate 🚀",
  "Every idea matters 💡",
  "Be bold, be creative, be you!",
  "Kid today, leader tomorrow 🌟",
  "Imagination is the first step to success."
];
function showQuote() {
  const box = document.getElementById("quoteBox");
  if (box) box.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
showQuote();

// ================== FORM ==================
const textarea = document.querySelector("textarea");
const counter = document.querySelector(".word-counter");
if (textarea && counter) {
  textarea.addEventListener("input", () => {
    const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
    counter.textContent = words + " words";
  });
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    // 🎉 Big central blast
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#4cafef", "#28a745", "#ffeb3b", "#ff4081"]
    });
    // Side streams
    const end = Date.now() + 2000;
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#4cafef", "#28a745", "#ffeb3b", "#ff4081"]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#4cafef", "#28a745", "#ffeb3b", "#ff4081"]
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();

    alert("🎉 Idea submitted successfully!");
    form.reset();
    if (counter) counter.textContent = "0 words";
  });
}

// ================== MASCOT ==================
const mascot = document.getElementById("mascot");
if (mascot) {
  mascot.addEventListener("click", () => {
    alert("👋 Hello! Keep crafting your dreams!");
  });
}

// ================== FADE-IN ON SCROLL ==================
const fadeElems = document.querySelectorAll(".fade-in-element");
function handleScroll() {
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("show");
  });
}
window.addEventListener("scroll", handleScroll);
handleScroll();

// ================== Animated Placeholders ==================
function animatePlaceholder(element, messages, speed = 100, delay = 2000) {
  let messageIndex = 0, charIndex = 0, deleting = false;
  function type() {
    const msg = messages[messageIndex];
    if (!deleting) {
      element.setAttribute("placeholder", msg.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === msg.length) {
        deleting = true;
        setTimeout(type, delay);
        return;
      }
    } else {
      element.setAttribute("placeholder", msg.substring(0, charIndex - 1));
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
      }
    }
    setTimeout(type, deleting ? speed / 2 : speed);
  }
  type();
}
window.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector("form input[name='name']");
  const ideaBox = document.querySelector("form textarea");
  if (nameInput) animatePlaceholder(nameInput, ["Enter your name", "Type your nickname", "Who are you?"], 100);
  if (ideaBox) animatePlaceholder(ideaBox, ["Share your big idea", "Be creative!", "What’s your innovation?"], 100);
});

// ================== Staggered Fade-in for Cards ==================
window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => card.style.animationDelay = `${index * 0.15}s`);
});

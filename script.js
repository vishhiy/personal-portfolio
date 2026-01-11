/* Scroll reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


const textArray = [
  "Pursuing BTech in",
  "Computer Science & Engineer",
  "Aspiring Software Developer"
];

let index = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeText() {
  if (charIndex < textArray[index].length) {
    typedText.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedText.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 60);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, 300);
  }
}

typeText();

import { outroAnimation, introAnimation } from './snippets/animations.js'; // All animation specifics live here

const buttons = document.querySelectorAll(".body-button");

function AnimateAndNavigate() {
  setTimeout(outroAnimation, 0);
  outroAnimation.finished.then();
}

if (buttons !== null) {
  buttons.forEach(button => button.addEventListener('click', outroAnimation));
}
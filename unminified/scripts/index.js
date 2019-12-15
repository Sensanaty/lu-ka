import { outroAnimation } from './snippets/animations.js';

if (window.location.pathname + window.location.search == "/public/") { // When in root
  const about = document.querySelector(".about-button");
  const projects = document.querySelector(".projects-button");
  const contact = document.querySelector(".contact-button");
  const ramblings = document.querySelector(".todo-button");

  about.addEventListener('click', function (event) {
    event.preventDefault();
    handleLinkClick(this);
  });

  projects.addEventListener('click', function (event) {
    event.preventDefault();
    handleLinkClick(this);
  });

  contact.addEventListener('click', function (event) {
    event.preventDefault();
    handleLinkClick(this);
  });

  ramblings.addEventListener('click', function (event) {
    event.preventDefault();
    handleLinkClick(this);
  });
}

function handleLinkClick(object) {
  outroAnimation();
  setTimeout(() => {
    window.location.href = object.getAttribute("href");
  }, 750);
}
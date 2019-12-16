import {
  outroAnimation,
  introAnimation
} from './snippets/animations.js';

// Remember to delete /public and .html for production
if (window.location.pathname + window.location.search == "/public/" || window.location.pathname + window.location.search == "/public/index.html") {
  const buttons = document.querySelectorAll(".body-button");

  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      handleLinkClick(this);
    });
  });

} else if (window.location.pathname + window.location.search == "/public/about.html") {
  const pageLinks = document.querySelectorAll('.link');
  const animBox = document.querySelectorAll('.animationBox');

  if (String(window.performance.getEntriesByType("navigation")[0].type) === "back_forward" || String(window.performance.getEntriesByType("navigation")[0].type) === "reload") {
    // Check if navigation was performed via a page refresh or navigation with forward/back
    animBox.forEach(box => box.style.height = "0%");
  } else setTimeout(introAnimation, 200);

  // After animation
  // TODO: For some reason this will make the animation play in reverse?
  pageLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      handleLinkClick(this);
    });
  });
}

/**
 * When a user clicks any link with any href, play outroAnimation and trigger a page navigation after 750 milliseconds
 * @param {NodeList} object - A NodeList that contains every link on the current page
 */
function handleLinkClick(object) {
  outroAnimation();
  setTimeout(() => {
    window.location.href = object.getAttribute("href");
  }, 800);
}
import anime from 'animejs/lib/anime.es';

const ANIMATION_HEIGHT = [{value: "0%"},{value: "5%"},{value: "10%"},{value: "15%"},{value: "20%"},{value: "25%"},{value: "30%"},{value: "35%"},{value: "40%"},{value: "45%"},{value: "50%"},{value: "55%"},{value: "60%"},{value: "65%"},{value: "70%"},{value: "75%"},{value: "80%"},{value: "85%"},{value: "90%"},{value: "95%"},{value: "100%"}];

const animationBoxes = document.querySelectorAll('.animationBox'); // Select all the boxes to be animated

let j = 0;
animationBoxes.forEach(function (box) {
  box.setAttribute("style", `left: ${j}%;`); // Set their absolute positioning correctly
  j += 10;
});

/**
 * The animation that plays when the user clicks a link
 */
export function outroAnimation() {
  return anime({
    targets: animationBoxes,
    height: ANIMATION_HEIGHT,
    delay: anime.stagger(100, {
      start: 200,
      from: "center"
    }),
    duration: 215,
    easing: 'easeOutElastic',
    elasticity: 500
  });
}

/**
 * The animation that plays when a user visits a new page
 */
export function introAnimation() { // Plays on page load
  animationBoxes.forEach(box => box.style.height = "100%"); // For some reason the intro animation just doesn't work properly if this doesn't happen
  return anime({
    targets: animationBoxes,
    height: ANIMATION_HEIGHT.reverse(),
    delay: anime.stagger(100, {
      start: 200,
      from: "center"
    }),
    duration: 175,
    easing: 'easeOutElastic',
    elasticity: 500
  });
}
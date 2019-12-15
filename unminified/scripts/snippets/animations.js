import anime from 'animejs/lib/anime.es';

const ANIMATION_HEIGHT = [{
  value: "5%"
}, {
  value: "10%"
}, {
  value: "15%"
}, {
  value: "20%"
}, {
  value: "25%"
},{
  value: "30%"
},{
  value: "35%"
},{
  value: "40%"
},{
  value: "45%"
},{
  value: "50%"
},{
  value: "55%"
},{
  value: "60%"
},{
  value: "65%"
},{
  value: "70%"
},{
  value: "75%"
},{
  value: "80%"
},{
  value: "85%"
},{
  value: "90%"
},{
  value: "95%"
},{
  value: "100%"
}];

const animationBoxes = document.querySelectorAll('.animationBox'); // Select all the boxes to be animated

export function outroAnimation() { // Plays on page out
  let j = 0;

  animationBoxes.forEach(function (box) {
    box.setAttribute("style", `left: ${j}%;`); // Set their absolute positioning correctly
    j += 10;
  });

  return anime({
    targets: animationBoxes,
    height: ANIMATION_HEIGHT,
    delay: anime.stagger(100, {
      start: 200,
      from: "center"
    }),
    duration: 175,
    easing: 'easeOutElastic',
    elasticity: 500,
  });
}

export function introAnimation() { // Plays on page load
  let j = 0;

  animationBoxes.forEach(function (box) {
    box.setAttribute("style", `left: ${j}%;`); // Set their absolute positioning correctly
    j += 10;
  });

  return anime({
    targets: animationBoxes,
    height: ANIMATION_HEIGHT,
    delay: anime.stagger(100, {
      start: 200,
      from: "center"
    }),
    duration: 175,
    easing: 'easeOutElastic',
    elasticity: 500,
    direction: 'reverse'
  });
}

function inAndOut() {
  setTimeout(outroAnimation, 1);
  setTimeout(introAnimation, 1500);
}
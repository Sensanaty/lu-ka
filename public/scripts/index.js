import anime from '/node_modules/animejs/lib/anime.es.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log("It's loaded!");
  window.addEventListener('click', function() {
    anime({
      targets: '.animationBox',
      keyframes: [
        {height: "5%"},
        {height: "10%"},
        {height: "15%"},
        {height: "20%"},
        {height: "25%"},
        {height: "30%"},
        {height: "35%"},
        {height: "40%"},
        {height: "45%"},
        {height: "50%"},
        {height: "55%"},
        {height: "60%"},
        {height: "65%"},
        {height: "70%"},
        {height: "75%"},
        {height: "80%"},
        {height: "85%"},
        {height: "90%"},
        {height: "95%"},
        {height: "100%"}
      ],
      duration: 500,
      easing: 'linear'
    });
  });
});
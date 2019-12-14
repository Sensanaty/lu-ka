import anime from 'animejs/lib/anime.es';

console.log(`%c
_        _    _   _  __                 __  __   ______ 
| |      | |  | | | |/ /     /\\         |  \\/  | |  ____|
| |      | |  | | | ' /     /  \\        | \\  / | | |__   
| |      | |  | | |  <     / /\\ \\       | |\\/| | |  __|  
| |____  | |__| | | . \\   / ____ \\   _  | |  | | | |____ 
|______|  \\____/  |_|\\_\\ /_/    \\_\\ (_) |_|  |_| |______|
\n\t\t\t   %cMade with %c❤️ %cby %cLuka Salević %caka %cSensanaty\n\t\t\t\t\t\t\t\t\t\t\t %c(on Github)\n`,
       "font-size: 15px; color: #e69900;",
       "color: #26FD3C; font-size: 13px;",
       "color: red",
       "color: #26FD3C; font-size: 13px;",
       "color: #26FD3C; font-size: 15px;",
       "color: #26FD3C; font-size: 13px;",
       "color: #26FD3C; font-size: 15px;",
       "color: #26FD3C; font-size: 9px;");

   console.log(
       `\t\t\t\t\t\t%cCurious about the source? It's on GitHub!\n\t\t\t\t\t   https://github.com/Sensanaty/lu-ka`,
       "color: #FFA500; font-size: 13px;");

const animationBoxes = document.querySelectorAll('.animationBox');
let j = 0;

animationBoxes.forEach(function(box) {
  box.setAttribute("style", `left: ${j}%;`);
  j += 10;
});

window.addEventListener('click', function () {
  anime({
    targets: ' .animationBox',
    height: [
      {value: "5%"},
      {value: "10%"},
      {value: "15%"},
      {value: "20%"},
      {value: "25%"},
      {value: "30%"},
      {value: "35%"},
      {value: "40%"},
      {value: "45%"},
      {value: "50%"},
      {value: "55%"},
      {value: "60%"},
      {value: "65%"},
      {value: "70%"},
      {value: "75%"},
      {value: "80%"},
      {value: "85%"},
      {value: "90%"},
      {value: "95%"},
      {value: "100%"}
    ],
    delay: anime.stagger(100, {start: 200, from: "center"}),
    duration: 175,
    easing: 'easeOutElastic',
    elasticity: 500,
  });
});

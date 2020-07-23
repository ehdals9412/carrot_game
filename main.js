'use strict';

const playButton = document.querySelector('.play__button');
const section = document.querySelector('.section');
const timerPlay = document.querySelector('.timer-play');
const test = document.querySelector('.test');

// play button click event!
playButton.addEventListener('click', () => {
  // timer();
  xy();
});

section.addEventListener('mousemove', (e) => {
  const x = e.pageX;
  const y = e.pageY;
  console.log(`x: ${x}, y: ${y}`);
});

function xy() {
  const rect = section1.getBoundingClientRect();
  const x = rect.top;
  const xx = rect.bottom;
  const y = rect.left;
  const yy = rect.right;
  console.log(x);
  console.log(xx);
  console.log(y);
  console.log(yy);
}

// 1. timer function!
function timer() {
  let sum = 10;
  // timer 함수
  const timer = setInterval(() => {
    sum = sum - 1;
    if (sum < 0) {
      alert('time over!');
      clearInterval(timer);
      return;
    }
    timerPlay.innerHTML = `00:0${sum}`;
  }, 1000);
}

// 2. bug & carror result function
function createBug() {
  // const bug = document.createElement('img');
  // bug.setAttribute('src', 'img/bug.png');
  // bug.setAttribute('class', 'bug');
  // const carrot = document.createElement('img');
  // carrot.setAttribute('src', 'img/carrot.png');
  // carrot.setAttribute('class', 'carrot');
  // carrot.setAttribute('position', 'relative');
  // carrot.setAttribute('top', `${350}px`);
  // carrot.setAttribute('left', `${400}px`);
  // section1.appendChild(bug);
  // section1.appendChild(carrot);
}

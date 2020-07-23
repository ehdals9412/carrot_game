'use strict';

const display = document.querySelector('.game__display');
const playBtn = document.querySelector('.game__play-btn');
const timer = document.querySelector('.game__timer');

// play button click event!
playBtn.addEventListener('click', () => {
  console.log('play!');
  timeCheck();
});

// 1. timer function!
function timeCheck() {
  let time = 10;
  const timeCheck = setInterval(() => {
    time -= 1;
    console.log(time);
    if (time == 0) {
      alert('time over!');
      clearInterval(timeCheck);
    }
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

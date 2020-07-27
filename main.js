'use strict';
const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const CARROT_SIZE = 80;

const gameBtn = document.querySelector('.game__button');
const timer = document.querySelector('.game__timer');
const score = document.querySelector('.game__score');

gameBtn.addEventListener('click', () => {
  removeHide();
  initGame();
});

function removeHide() {
  timer.classList.remove('hide');
  score.classList.remove('hide');
}

// 필드에 아이템 추가
function initGame() {
  addItem('carrot', 5, 'img/carrot.png');
  addItem('bug', 5, 'img/bug.png');
}

// 아이템 생성 함수
function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

// 랜덤 좌표 출력
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

'use strict';
import PopUp from './popup.js';
import { GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';

// 팝업 클래스 생성
const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(90)
  .carrotCount(40)
  .bugCount(40)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = 'Replay❓';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WIN!!🎉';
      sound.playwin();
      break;
    case Reason.lose:
      message = 'YOU LOSE!!🎉';
      sound.playBug();
      break;
    default:
      throw Error('not valid reason!');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});

'use strict';

// export default : 외부에서 해당 클래스를 볼 수 있고 핸들링 가능
export default class PopUp {
  constructor() {
    this.PopUp = this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.pop-up__message');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      // if (this.onClick !== null) {
      //   this.onClick();
      // }
      this.hide();
    });
  }

  // click 리스너 등록 함수
  setClickListener(onClick) {
    // this.onClick = PopUp class's memeber value (멤버변수!)
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up__hide');
  }

  hide() {
    this.popUp.classList.add('pop-up__hide');
  }
}

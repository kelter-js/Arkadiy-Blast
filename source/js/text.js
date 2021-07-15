import { Constants } from './constants.js'

class Text extends PIXI.Text {
  #x;
  #y;

  constructor(x, y, text, textStyle = Constants.scoreTextStyle) {
    super();
    this.#x = x;
    this.#y = y;
    this.text = text;
    this.style = textStyle;
    this.zOrder = 1;
    this.setTextPosition();
  }

  setTextPosition() {
    this.position.set(this.#x, this.#y);
  }
}

export { Text }

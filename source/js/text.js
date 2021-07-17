import { Constants } from './constants.js'

class Text extends PIXI.Text {
  #x;
  #y;

  constructor(options, text, textStyle = Constants.scoreText.textStyle) {
    super();
    this.#x = options.x;
    this.#y = options.y;
    this.text = text || options.text;
    this.style = textStyle;
    this.zOrder = 1;
    this.setTextPosition();
  }

  setTextPosition() {
    this.position.set(this.#x, this.#y);
  }

  changeCurrenttext(value) {
    this.text = value;
  }
}

export { Text }

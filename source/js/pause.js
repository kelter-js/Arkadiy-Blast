import { Frame } from './frame.js'
import { game } from './script.js'

class PauseButton extends Frame {
  #increasedSize;
  #isOnPause;

  constructor(x, y, width, height, texture) {
    super(x, y, width, height, texture);
    this.#increasedSize = 10;
    this.interactive = true;
    this.on('mouseover', this.onMouseOver);
    this.on('mouseout', this.onMouseOut);
    this.on('mousedown', this.onMouseDownButton);

    this.#isOnPause = false;
  }

  onMouseOver() {
    this.width += this.#increasedSize;
    this.height += this.#increasedSize;
    this.x -= this.#increasedSize / 2;
  }

  onMouseOut() {
    this.width -= this.#increasedSize;
    this.height -= this.#increasedSize;
    this.x += this.#increasedSize / 2;
  }

  onMouseDownButton() {
    if (this.#isOnPause) {
      this.#isOnPause = false;
      game.changeState(0);
      return;
    }
    this.#isOnPause = true;
    game.changeState(1);
  }
}

export { PauseButton }


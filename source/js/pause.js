import { Frame } from './frame.js'
import { game } from './script.js'
import { Constants } from './constants.js'

class PauseButton extends Frame {
  #increasedSize;
  #isOnPause;

  constructor(pause) {
    super(pause);
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
    if (game.getCurrentState() === 'over' || game.getCurrentState() === 'win') {
      return;
    }

    if (this.#isOnPause) {
      this.#isOnPause = false;
      game.changeState(Constants.game.startState);
      return;
    }
    this.#isOnPause = true;
    game.changeState(Constants.game.pauseState);
  }
}

export { PauseButton }


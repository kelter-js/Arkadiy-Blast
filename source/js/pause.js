import { Frame } from './frame.js'
import { game } from './script.js'
import { Constants } from './constants.js'
import { endGame } from './script.js'

class PauseButton extends Frame {
  #increasedSize;
  #isOnPause;

  constructor(pause) {
    super(pause);
    this.#increasedSize = 10;
    this.interactive = true;
    this.on(Constants.events.over, this.onMouseOver);
    this.on(Constants.events.out, this.onMouseOut);
    this.on(Constants.events.click, this.onMouseDownButton);

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
    if (game.getCurrentState() === Constants.gameStates[2] || game.getCurrentState() === Constants.gameStates[3]) {
      return;
    }

    if (this.#isOnPause) {
      this.#isOnPause = false;
      endGame.startCounter();
      game.changeState(Constants.game.startState);
      return;
    }

    this.#isOnPause = true;
    endGame.stopCounter();
    game.changeState(Constants.game.pauseState);
  }
}

export { PauseButton }


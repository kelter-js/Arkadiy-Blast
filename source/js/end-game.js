import { Frame } from './frame.js'
import { app } from './script.js'

class EndGame extends Frame {
  #winScore;
  #maxActions;
  #actionsDone;

  constructor(x, y, width, height, texture, winScore, maxActions) {
    super(x, y, width, height, texture);
    this.#winScore = winScore;
    this.#maxActions = maxActions;
    this.#actionsDone = 0;
  }

  get actionsLeft () {
    return this.#maxActions - this.#actionsDone;
  }

  showEndGame() {
    app.stage.addChild(this);
  }

  checkWin(currentScore) {
    if (currentScore >= this.#winScore) {
      return true;
    }
  }

  win() {
    game.changeState(2);
  }

  increaseActions(currentScore) {
    this.#actionsDone++;

    if(this.checkWin(currentScore)) {
      this.win();
      return;
    }

    this.checkActionsStatus();
  }

  checkActionsStatus() {
    if (this.#actionsDone >= this.#maxActions) {
      this.showEndGame();
    }
  }
}

export { EndGame }

import { app, generatedBoard } from './script.js'
import { Text } from './text.js'
import { Constants } from './constants.js'

class Game {
  #states;
  #currentState;

  constructor() {
    this.#states = [new Start(), new PauseState(), new Over()];
    this.#currentState = this.#states[0];
  }

  changeState(index) {
    if (this.#currentState.destroy) {
      this.#currentState.destroy();
    }

    this.#currentState = this.#states[index];
    this.play();
  }

  play() {
    this.#currentState.play();
  }

}

class State {
  constructor(state) {
    this.state = state;
  }
}

class Start extends State {
  constructor() {
    super('start');
  }

  play() {
    generatedBoard.setBlocksInteractiveState(true);
  }
}

class PauseState extends State {
  #pause;
  #sprites;

  constructor() {
    super('pause');
    this.#pause = new Text(Constants.pause.textX, Constants.pause.textY, Constants.pause.text, Constants.pause.textStyle);
  }

  setElementsNonInteractive() {
    generatedBoard.setBlocksInteractiveState(false);
  }

  createPauseNotification() {
    app.stage.addChild(this.#pause);
  }

  destroy() {
    app.stage.removeChild(this.#pause);
  }

  play() {
    this.setElementsNonInteractive();
    this.createPauseNotification();
  }
}

class Over extends State {
  constructor() {
    super('over');
  }

  play() {
    return 'over';
  }
}

export { Game }

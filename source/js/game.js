import {
  app,
  generatedBoard
} from './script.js'
import { Text } from './text.js'
import { Constants } from './constants.js'

class Game {
  #states;
  #currentState;

  constructor() {
    this.#states = [new Start(), new PauseState(), new End(), new Win()];
    this.#currentState = this.#states[0];
  }

  changeState(index) {
    if (this.#currentState.destroy) {
      this.#currentState.destroy();
    }
    this.#currentState = this.#states[index];
    this.play();
  }

  getCurrentState() {
    return this.#currentState.state;
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
    super(Constants.gameStates[0]);
  }

  play() {
    generatedBoard.setBlocksInteractiveState(true);
  }
}

class Win extends State {
  #win;

  constructor() {
    super(Constants.gameStates[3]);
    this.#win = new Text(Constants.centerText, Constants.stateTexts.win, Constants.centerText.textStyle);
    this.#win.anchor.x = .1;
  }

  destroy() {
    app.stage.removeChild(this.#win);
  }

  play() {
    generatedBoard.setBlocksInteractiveState(false);
    app.stage.addChild(this.#win);
  }
}

class PauseState extends State {
  #pause;

  constructor() {
    super(Constants.gameStates[1]);
    this.#pause = new Text(Constants.centerText, Constants.stateTexts.pause, Constants.centerText.textStyle);
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

class End extends State {
  constructor() {
    super(Constants.gameStates[2]);
  }

  play() {
    generatedBoard.setBlocksInteractiveState(false);
  }
}

export { Game }

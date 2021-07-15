import { app, blocks } from './script.js'
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
    blocks.forEach(row => {
      row.forEach(column => {
        column.interactive = true;
      })
    })
  }
}

class PauseState extends State {
  #pause;
  #sprites;

  constructor() {
    super('pause');
    this.#pause = new Text(Constants.pauseTextX, Constants.pauseTextY, Constants.pauseText, Constants.pauseTextStyle);
  }

  setElementsNonInteractive() {
    blocks.forEach(row => {
      row.forEach(column => {
        column.interactive = false;
      })
    });
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

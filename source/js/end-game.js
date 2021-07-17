import { Frame } from './frame.js'
import {
  app,
  game,
  generatedBoard
} from './script.js'
import { Text } from './text.js'
import { Constants } from './constants.js'


class EndGame extends Frame {
  #winScore;
  #maxActions;
  #actionsDone;
  #timeCounter;
  #currentScore;
  #counterId;
  #time;
  #timeText;
  #score;
  #scoreText;
  #restartButtonInterface;
  #restartText;
  #endGameElements

  constructor(endGameFrame, game, time, timeText, score, scoreText, restartButton, restartText) {
    super(endGameFrame);
    this.#winScore = game.winScore;
    this.#maxActions = game.maxActions;
    this.#actionsDone = 0;
    this.#timeCounter = 0;
    this.#currentScore = 0;
    this.#counterId = null;

    this.#time = time;
    this.#timeText = timeText;
    this.#score = score;
    this.#scoreText = scoreText;

    this.#restartButtonInterface = restartButton;
    this.#restartText = restartText;

    this.#restartButtonInterface.interactive = true;
    this.#restartButtonInterface.on('mousedown', this.createMouseDownHandler());

    this.#endGameElements = [];

    this.startCounter();
  }

  get actionsLeft () {
    return this.#maxActions - this.#actionsDone;
  }

  get time() {
    return this.#timeCounter;
  }

  startCounter() {
    this.#counterId = setInterval(() => this.#timeCounter++, 1000);
  }

  showEndGame() {
    clearInterval(this.#counterId);
    const timeText = new Text(this.#timeText);
    const time = new Text(this.#time, this.#timeCounter, this.#time.textStyle);
    const scoreText = new Text(this.#scoreText);
    const score = new Text(this.#score, this.#currentScore);

    this.#endGameElements.push(timeText, time, scoreText, score, this, this.#restartButtonInterface, this.#restartText);

    app.stage.addChild(
      this,
      this.#restartButtonInterface,
      this.#restartText,
      timeText,
      time,
      scoreText,
      score
    );

    game.changeState(Constants.game.loseState);
  }

  resetCurrentState() {
    this.#actionsDone = 0;
    this.#timeCounter = 0;
    this.#currentScore = 0;
    this.#counterId = null;
  }

  createMouseDownHandler() {
    return () => {
      this.resetCurrentState();
      this.#endGameElements.forEach(element => app.stage.removeChild(element));
      this.#endGameElements = [];
      game.changeState(Constants.game.startState);
      generatedBoard.lineInterface.resetLine();
      generatedBoard.scoreInterface.resetScore();
      this.startCounter();
    }
  }

  checkWin(currentScore) {
    this.#currentScore = currentScore;
    if (currentScore >= this.#winScore) {
      return true;
    }
  }

  win() {
    clearInterval(this.#counterId);
    this.#endGameElements.push(this.#restartButtonInterface, this.#restartText);
    app.stage.addChild(this.#restartButtonInterface, this.#restartText);
    game.changeState(Constants.game.winState);
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

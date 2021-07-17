import { Board } from './board.js'
import { Constants } from './constants.js'
import { Frame } from './frame.js'
import { Score } from './score.js'
import { EndGame } from './end-game.js'
import { Text } from './text.js'
import { PauseButton } from './pause.js'
import { Game } from './game.js'
import { ProgressLine } from './progress-line.js'

let type = 'WebGL'

if(!PIXI.utils.isWebGLSupported()){
  type = 'canvas'
}

let app = new PIXI.Application({
  width: Constants.game.minWidth,
  height: Constants.game.minHeight,
  backgroundColor: Constants.game.bgColor,
});

document.body.appendChild(app.view);

const game = new Game();

const restartButton = new Frame(Constants.restartButton);

const restartText = new Text(Constants.restartText);

const score = new Score(Constants.scoreText);

const progressLine = new ProgressLine(
  Constants.progressLine,
  Constants.game.winScore
);

const pauseButton = new PauseButton(Constants.pauseButton);

const endGame = new EndGame(
  Constants.endGameFrame,
  Constants.game,
  Constants.time,
  Constants.timeText,
  Constants.finalScore,
  Constants.finatlScoreText,
  restartButton,
  restartText
);

const actionsLeft = new Text(Constants.actionsLeftText, endGame.actionsLeft);

const actionText = new Text(Constants.actionText);

const generatedBoard = new Board(
  Constants.block,
  Constants.game,
  Constants.board,
  score,
  progressLine,
  endGame,
  actionsLeft
);

const gameBoard = new Frame(Constants.board);

const scoreFrame = new Frame(Constants.score);

const maxScoreFrame = new Frame(Constants.maxScore);

const maxScore = new Text(
  Constants.maxScoreText,
  Constants.game.winScore
);

const actionsFrame = new Frame(Constants.actions);

const progressBarFrame = new Frame(Constants.progressBar);

const currentScoreText = new Text(Constants.currentScore);

const winScoreText = new Text(Constants.winScore);

const setup = () => {
  return () => {
    gameBoard.setTextures();
    scoreFrame.setTextures();
    maxScoreFrame.setTextures();
    pauseButton.setTextures();
    progressBarFrame.setTextures();
    progressLine.setTextures();
    endGame.setTextures();
    actionsFrame.setTextures();
    restartButton.setTextures();

    app.stage.addChild(gameBoard);
    app.stage.addChild(scoreFrame);
    app.stage.addChild(score);
    app.stage.addChild(maxScoreFrame);
    app.stage.addChild(maxScore);
    app.stage.addChild(pauseButton);
    app.stage.addChild(progressBarFrame);
    app.stage.addChild(progressLine);
    app.stage.addChild(currentScoreText);
    app.stage.addChild(winScoreText);
    app.stage.addChild(actionsFrame);
    app.stage.addChild(actionsLeft);
    app.stage.addChild(actionText);
    generatedBoard.fillBlockStorage();
    game.play();
  }
}

app.loader
  .add([Constants.block.colors[0],
    Constants.block.colors[1],
    Constants.block.colors[2],
    Constants.block.colors[3],
    Constants.block.colors[4],
    Constants.score.path,
    Constants.maxScore.path,
    Constants.pauseButton.path,
    Constants.progressBar.path,
    Constants.progressLine.path,
    Constants.endGameFrame.path,
    Constants.board.path])
  .load(setup());

export {
  app,
  generatedBoard,
  endGame,
  game,
}

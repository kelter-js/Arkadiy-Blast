import { Board } from './board.js'
import { Constants } from './constants.js'
import { Frame } from './frame.js'
import { Score } from './score.js'
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

const score = new Score(
  Constants.score.start,
  Constants.score.modifier,
  Constants.score.textX,
  Constants.score.textY
);

const progressLine = new ProgressLine(
  Constants.progressLine.x,
  Constants.progressLine.y,
  Constants.progressLine.maxWidth,
  Constants.progressLine.height,
  Constants.progressLine.path,
  Constants.game.winScore
);

const generatedBoard = new Board(
  Constants.block.padding,
  Constants.block.moveIndex,
  Constants.game.columnsAmount,
  Constants.game.rowsAmount,
  Constants.board.x,
  Constants.board.y,
  Constants.block.colors,
  Constants.block.width,
  Constants.block.height,
  Constants.block.anchorPoint,
  Constants.game.minElementsDestroy,
  score,
  progressLine
);

const gameBoard = new Frame(
  Constants.board.x,
  Constants.board.y,
  Constants.board.width,
  Constants.board.height,
  Constants.board.path
);

const scoreFrame = new Frame(
  Constants.score.x,
  Constants.score.y,
  Constants.score.width,
  Constants.score.height,
  Constants.score.path
);

const maxScoreFrame = new Frame(
  Constants.maxScore.x,
  Constants.maxScore.y,
  Constants.maxScore.width,
  Constants.maxScore.height,
  Constants.maxScore.path
);

const maxScore = new Text(
  Constants.maxScore.textX,
  Constants.maxScore.textY,
  Constants.game.winScore
);

const pauseButton = new PauseButton(
  Constants.pause.x,
  Constants.pause.y,
  Constants.pause.buttonWidth,
  Constants.pause.buttonHeight,
  Constants.pause.buttonPath,
);

const progressBarFrame = new Frame(
  Constants.progressBar.x,
  Constants.progressBar.y,
  Constants.progressBar.width,
  Constants.progressBar.height,
  Constants.progressBar.path
);

const currentScore = new Text(
  Constants.currentScore.x,
  Constants.currentScore.y,
  Constants.currentScore.text
);

const setup = () => {
  return () => {
    gameBoard.setTextures();
    scoreFrame.setTextures();
    maxScoreFrame.setTextures();
    pauseButton.setTextures();
    progressBarFrame.setTextures();
    progressLine.setTextures();

    app.stage.addChild(gameBoard);
    app.stage.addChild(scoreFrame);
    app.stage.addChild(score);
    app.stage.addChild(maxScoreFrame);
    app.stage.addChild(maxScore);
    app.stage.addChild(pauseButton);
    app.stage.addChild(progressBarFrame);
    app.stage.addChild(progressLine);
    app.stage.addChild(currentScore);
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
    Constants.pause.buttonPath,
    Constants.progressBar.path,
    Constants.progressLine.path,
    Constants.board.path])
  .load(setup());

export {
  app,
  generatedBoard,
  game,
}

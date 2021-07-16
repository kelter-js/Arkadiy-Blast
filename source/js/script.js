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
  width: Constants.minWidth,
  height: Constants.minHeight,
  backgroundColor: Constants.bgColor,
});

document.body.appendChild(app.view);

const game = new Game();

const score = new Score(
  Constants.scoreStart,
  Constants.scoreModifier,
  Constants.scoreTextPositionX,
  Constants.scoreTextPositionY
);

const progressLine = new ProgressLine(
  Constants.progressLineX,
  Constants.progressLineY,
  Constants.progressLineMaxWidth,
  Constants.progressLineHeight,
  Constants.progressLinePath,
  Constants.maxScore
);

const generatedBoard = new Board(
  Constants.blockPadding,
  Constants.blockMoveIndex,
  Constants.columnsAmount,
  Constants.rowsAmount,
  Constants.boardCoordinateX,
  Constants.boardCoordinateY,
  Constants.blockColors,
  Constants.blockWidth,
  Constants.blockHeight,
  Constants.blockAnchorPoint,
  Constants.minElementsDestroy,
  score,
  progressLine
);

const gameBoard = new Frame(
  Constants.boardCoordinateX,
  Constants.boardCoordinateY,
  Constants.boardWidth,
  Constants.boardHeight,
  Constants.boardPath
);

const scoreFrame = new Frame(
  Constants.scoreX,
  Constants.scoreY,
  Constants.scoreWidth,
  Constants.scoreHeight,
  Constants.scorePath
);

const maxScoreFrame = new Frame(
  Constants.maxScoreX,
  Constants.maxScoreY,
  Constants.maxScoreWidth,
  Constants.maxScoreHeight,
  Constants.maxScorePath
);

const maxScore = new Text(
  Constants.maxScoreTextX,
  Constants.maxScoreTextY,
  Constants.maxScore
);

const pauseButton = new PauseButton(
  Constants.pauseButtonX,
  Constants.pauseButtonY,
  Constants.pauseButtonWidth,
  Constants.pauseButtonHeight,
  Constants.pauseButtonPath,
);

const progressBarFrame = new Frame(
  Constants.progressBarX,
  Constants.progressBarY,
  Constants.progressBarWidth,
  Constants.progressBarHeight,
  Constants.progressBarPath
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
    generatedBoard.fillBlockStorage();
    game.play();
  }
}

app.loader
  .add([Constants.blockColors[0],
    Constants.blockColors[1],
    Constants.blockColors[2],
    Constants.blockColors[3],
    Constants.blockColors[4],
    Constants.scorePath,
    Constants.maxScorePath,
    Constants.pauseButtonPath,
    Constants.progressBarPath,
    Constants.progressLinePath,
    Constants.boardPath])
  .load(setup());

export {
  app,
  generatedBoard,
  game,
}

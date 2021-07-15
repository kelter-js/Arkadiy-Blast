import { Utils } from './utils.js'

const BG_COLOR = '0xa1a1a1';

const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 50;
const BLOCK_MOVE_INDEX = 60;
const BLOCK_PADDING = 15;
const SPACE_BETWEEN_BLOCK = 10;
const COLUMNS_AMOUNT = 9;
const ROWS_AMOUNT = 7;
const BLOCK_ANCHOR_POINT = .5;

const DISPLAY_PADDING = 40;
const MIN_WIDTH = window.innerWidth - (DISPLAY_PADDING * 2);
const MIN_HEIGHT = window.innerHeight - 3;

const BOARD_PADDING = 20;
const BOARD_WIDTH = Utils.getBoardSize(
  BOARD_PADDING,
  BLOCK_WIDTH,
  COLUMNS_AMOUNT,
  SPACE_BETWEEN_BLOCK
);
const BOARD_HEIGHT = Utils.getBoardSize(
  BOARD_PADDING,
  BLOCK_HEIGHT,
  ROWS_AMOUNT,
  SPACE_BETWEEN_BLOCK
);
const BOARD_COORDINATE_X = Utils.getCenterCoordinates(MIN_WIDTH, BOARD_WIDTH);
const BOARD_COORDINATE_Y = Utils.getCenterCoordinates(MIN_HEIGHT, BOARD_HEIGHT);
const BOARD_PATH = './../img/icons/gameplay.png';

const PROGRESS_BAR_PATH = './../img/icons/progress-bar.png';
const PROGRESS_BAR_WIDTH = Utils.getPercentage(MIN_WIDTH, 38.4);
const PROGRESS_BAR_HEIGHT = Utils.getPercentage(MIN_HEIGHT, 10.5);
const PROGRESS_BAR_X = Utils.getCenterCoordinates(MIN_WIDTH, PROGRESS_BAR_WIDTH);
const PROGRESS_BAR_Y = 0;

const PROGRESS_LINE_PATH = './../img/icons/progress-line.png';
const PROGRESS_LINE_MAX_WIDTH = Utils.getPercentage(MIN_WIDTH, 35.4);
const PROGRESS_LINE_HEIGHT = Utils.getPercentage(MIN_HEIGHT, 3.4);
const PROGRESS_LINE_X = Utils.getPercentage(MIN_WIDTH, 32.1);
const PROGRESS_LINE_Y = Utils.getPercentage(MIN_HEIGHT, 4.7);

const SCORE_START = 0;
const SCORE_MODIFIER = 10;
const SCORE_WIDTH = Utils.getPercentage(MIN_WIDTH, 11.3);
const SCORE_HEIGHT = Utils.getPercentage(MIN_HEIGHT, 6.5);
const SCORE_POSITION_X = Utils.getPercentage(MIN_WIDTH, 12) - (SCORE_WIDTH / 2);
const SCORE_POSITION_Y = Utils.getPercentage(MIN_HEIGHT, 12);

const MAX_ACTIONS = 15;

const MAX_SCORE = 2000;
const MAX_SCORE_PATH = './../img/icons/money.png';
const MAX_SCORE_WIDTH = Utils.getPercentage(MIN_WIDTH, 14.1);
const MAX_SCORE_HEIGHT = Utils.getPercentage(MIN_HEIGHT, 6.5);
const MAX_SCORE_POSITION_X = Utils.getPercentage(MIN_WIDTH, 83) - (SCORE_WIDTH / 2);
const MAX_SCORE_POSITION_Y = Utils.getPercentage(MIN_HEIGHT, 12);
const MAX_SCORE_TEXT_POSITION_X = MAX_SCORE_POSITION_X + Utils.getPercentage(MAX_SCORE_POSITION_Y, 50);
const MAX_SCORE_TEXT_POSITION_Y = MAX_SCORE_POSITION_Y + Utils.getPercentage(MAX_SCORE_POSITION_Y, 10);

const BLOCK_COLORS = {
  0: './../img/icons/blue-brick.png',
  1: './../img/icons/red-brick.png',
  2: './../img/icons/yellow-brick.png',
  3: './../img/icons/green-brick.png',
  4: './../img/icons/purple-brick.png',
};

const SCORE_PATH = './../img/icons/money-2.png';
const SCORE_TEXT_POSITION_X = SCORE_POSITION_X + Utils.getPercentage(SCORE_POSITION_X, 50);
const SCORE_TEXT_POSITION_Y = SCORE_POSITION_Y + Utils.getPercentage(SCORE_POSITION_Y, 10);

const SCORE_TEXT_STYLE = new PIXI.TextStyle({
  fontFamily: 'Marvin-Shadow',
  fontSize: 24,
  fill: 'white',
  stroke: 'white',
  strokeThickness: 2,
});

const PAUSE_TEXT_STYLE = new PIXI.TextStyle({
  fontFamily: 'Marvin-Shadow',
  fontSize: 150,
  fill: 'white',
  stroke: 'white',
  strokeThickness: 10,
});

const PAUSE_TEXT = 'Пауза';
const PAUSE_TEXT_WIDTH = 562;
const PAUSE_TEXT_HEIGHT = 209;
const PAUSE_TEXT_POSITION_X = Utils.getCenterCoordinates(MIN_WIDTH, PAUSE_TEXT_WIDTH);
const PAUSE_TEXT_POSITION_Y = Utils.getCenterCoordinates(MIN_HEIGHT, PAUSE_TEXT_HEIGHT);

const PAUSE_BUTTON_PATH = './../img/icons/pause.png';
const PAUSE_BUTTON_WIDTH = Utils.getPercentage(MIN_WIDTH, 8);
const PAUSE_BUTTON_HEIGHT = Utils.getPercentage(MIN_HEIGHT, 10.4);
const PAUSE_BUTTON_POSITION_X = Utils.getPercentage(MIN_WIDTH, 93) - (PAUSE_BUTTON_WIDTH / 2);
const PAUSE_BUTTON_POSITION_Y = Utils.getPercentage(MIN_HEIGHT, 1);

class Constants {

  static get bgColor() {
    return BG_COLOR;
  }

  static get blockWidth() {
    return BLOCK_WIDTH;
  }

  static get blockHeight() {
    return BLOCK_HEIGHT;
  }

  static get spaceBetweenBlock() {
    return SPACE_BETWEEN_BLOCK;
  }

  static get columnsAmount() {
    return COLUMNS_AMOUNT;
  }

  static get rowsAmount() {
    return ROWS_AMOUNT;
  }

  static get displayPadding() {
    return DISPLAY_PADDING;
  }

  static get minWidth() {
    return MIN_WIDTH;
  }

  static get minHeight() {
    return MIN_HEIGHT;
  }

  static get boardPadding() {
    return BOARD_PADDING;
  }

  static get boardWidth() {
    return BOARD_WIDTH;
  }

  static get boardHeight() {
    return BOARD_HEIGHT;
  }

  static get boardCoordinateX() {
    return BOARD_COORDINATE_X;
  }

  static get boardCoordinateY() {
    return BOARD_COORDINATE_Y;
  }

  static get blockColors() {
    return BLOCK_COLORS;
  }

  static get blockPadding() {
    return BLOCK_PADDING;
  }

  static get blockMoveIndex() {
    return BLOCK_MOVE_INDEX;
  }

  static get blockAnchorPoint() {
    return BLOCK_ANCHOR_POINT;
  }

  static get scoreStart() {
    return SCORE_START;
  }

  static get scoreModifier() {
    return SCORE_MODIFIER;
  }

  static get scoreX() {
    return SCORE_POSITION_X;
  }

  static get scoreY() {
    return SCORE_POSITION_Y;
  }

  static get scorePath() {
    return SCORE_PATH;
  }

  static get scoreWidth() {
    return SCORE_WIDTH;
  }

  static get scoreHeight() {
    return SCORE_HEIGHT;
  }

  static get scoreTextStyle() {
    return SCORE_TEXT_STYLE;
  }

  static get scoreTextPositionX() {
    return SCORE_TEXT_POSITION_X;
  }

  static get scoreTextPositionY() {
    return SCORE_TEXT_POSITION_Y;
  }

  static get maxScore() {
    return MAX_SCORE;
  }

  static get maxScorePath() {
    return MAX_SCORE_PATH;
  }

  static get maxScoreX() {
    return MAX_SCORE_POSITION_X;
  }

  static get maxScoreY() {
    return MAX_SCORE_POSITION_Y;
  }

  static get maxScoreWidth() {
    return MAX_SCORE_WIDTH;
  }

  static get maxScoreHeight() {
    return MAX_SCORE_HEIGHT;
  }

  static get boardPath() {
    return BOARD_PATH;
  }

  static get maxScoreTextX() {
    return MAX_SCORE_TEXT_POSITION_X;
  }

  static get maxScoreTextY() {
    return MAX_SCORE_TEXT_POSITION_Y;
  }

  static get pauseText() {
    return PAUSE_TEXT;
  }

  static get pauseTextX() {
    return PAUSE_TEXT_POSITION_X;
  }

  static get pauseTextY() {
    return PAUSE_TEXT_POSITION_Y;
  }

  static get pauseTextStyle() {
    return PAUSE_TEXT_STYLE;
  }

  static get pauseButtonPath() {
    return PAUSE_BUTTON_PATH;
  }

  static get pauseButtonWidth() {
    return PAUSE_BUTTON_WIDTH;
  }

  static get pauseButtonHeight() {
    return PAUSE_BUTTON_HEIGHT;
  }

  static get pauseButtonX() {
    return PAUSE_BUTTON_POSITION_X;
  }

  static get pauseButtonY() {
    return PAUSE_BUTTON_POSITION_Y;
  }

  static get progressBarPath() {
    return PROGRESS_BAR_PATH;
  }

  static get progressBarWidth() {
    return PROGRESS_BAR_WIDTH;
  }

  static get progressBarHeight() {
    return PROGRESS_BAR_HEIGHT;
  }

  static get progressBarX() {
    return PROGRESS_BAR_X;
  }

  static get progressBarY() {
    return PROGRESS_BAR_Y;
  }

  static get progressLinePath() {
    return PROGRESS_LINE_PATH;
  }

  static get progressLineMaxWidth() {
    return PROGRESS_LINE_MAX_WIDTH;
  }

  static get progressLineHeight() {
    return PROGRESS_LINE_HEIGHT;
  }

  static get progressLineX() {
    return PROGRESS_LINE_X;
  }

  static get progressLineY() {
    return PROGRESS_LINE_Y;
  }
}

export { Constants }

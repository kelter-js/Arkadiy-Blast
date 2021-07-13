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

const PROGRESS_BAR_Y = 0;
const PROGRESS_BAR_X = Math.floor(MIN_WIDTH / 2);

const SCORE_START = 0;
const SCORE_MODIFIER = 10;
const SCORE_POSITION_X = Utils.getPercentage(MIN_WIDTH, 10);
const SCORE_POSITION_Y = Utils.getPercentage(MIN_HEIGHT, 10);
const SCORE_WIDTH = Utils.getPercentage(MIN_WIDTH, 11.3);
const SCORE_HEIGHT = Utils.getPercentage(MIN_HEIGHT, 6.5);

const BLOCK_COLORS = {
  0: './../img/icons/blue-brick.png',
  1: './../img/icons/red-brick.png',
  2: './../img/icons/yellow-brick.png',
  3: './../img/icons/green-brick.png',
  4: './../img/icons/purple-brick.png',
};

const SCORE_PATH = './../img/icons/money-2.png';
const SCORE_TEXT_POSITION_X = SCORE_POSITION_X + Utils.getPercentage(SCORE_POSITION_X, 45);
const SCORE_TEXT_POSITION_Y = SCORE_POSITION_Y + Utils.getPercentage(SCORE_POSITION_Y, 12);

const SCORE_TEXT_STYLE = new PIXI.TextStyle({
  fontFamily: 'Marvin-Shadow',
  fontSize: 24,
  fill: 'white',
  stroke: 'white',
  strokeThickness: 2,
});

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

  static get progressBarX() {
    return PROGRESS_BAR_X;
  }

  static get progressBarY() {
    return PROGRESS_BAR_Y;
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
}

export { Constants }

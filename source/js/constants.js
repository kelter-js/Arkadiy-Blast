import { Utils } from './utils.js'

const BG_COLOR = '0xa1a1a1';

const BLOCK_WIDTH = 50;
const BLOCK_HEIGHT = 50;
const SPACE_BETWEEN_BLOCK = 10;
const COLUMNS_AMOUNT = 9;
const ROWS_AMOUNT = 7;

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

const BLOCK_COLORS = {
  0: "./../img/icons/blue-brick.png",
  1: "./../img/icons/red-brick.png",
  2: "./../img/icons/yellow-brick.png",
  3: "./../img/icons/green-brick.png",
  4: "./../img/icons/purple-brick.png",
};

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
}

export {Constants}

import { Utils } from './utils.js'

const GAME_SETTINGS = {
  'bgColor': 0xa1a1a1,
  'minWidth': 1340,
  'minHeight': 976,
  'columnsAmount': 9,
  'rowsAmount': 7,
  'minElementsDestroy': 2,
  'maxActions': 15,
  'winScore': 2000,
}

const PROGRESS_BAR = {
  'path': './../img/icons/progress-bar.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 38.4),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 10.5),
  'y': 0,
  get x () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  },
}

const BLOCK = {
  'colors': [
    './../img/icons/blue-brick.png',
    './../img/icons/red-brick.png',
    './../img/icons/yellow-brick.png',
    './../img/icons/green-brick.png',
    './../img/icons/purple-brick.png'
  ],
  'width': 50,
  'height': 50,
  'moveIndex': 60,
  'padding': 15,
  'spaceBetween': 10,
  'anchorPoint': .5,
}

const BOARD = {
  'path': './../img/icons/gameplay.png',
  'padding': 20,
  get width () {
    return Utils.getBoardSize(this.padding, BLOCK.width, GAME_SETTINGS.columnsAmount, BLOCK.spaceBetween);
  },
  get height () {
    return Utils.getBoardSize(this.padding, BLOCK.height, GAME_SETTINGS.rowsAmount, BLOCK.spaceBetween);
  },
  get y () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },
  get x () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  },
}

const PROGRESS_LINE = {
  'path': './../img/icons/progress-line.png',
  'maxWidth': Utils.getPercentage(GAME_SETTINGS.minWidth, 35.4),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 3.4),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 4.7),
  'x': Utils.getPercentage(GAME_SETTINGS.minWidth, 32.1),
}

const SCORE = {
  'path': './../img/icons/money-2.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 11.3),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 12),
  get y () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 12) - (this.height / 2);
  },
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 12) - (this.width / 2);
  },
  'start': 0,
  'modifier': 10,
  get textY () {
    return this.y + Utils.getPercentage(this.y, 10);
  },
  get textX () {
    return this.x + Utils.getPercentage(this.x, 50);
  },
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 24,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 2,
  }),
}

const MAX_SCORE = {
  'path': './../img/icons/money.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 14.1),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 12),
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 83) - (this.width / 2);
  },
  get textY () {
    return this.y + Utils.getPercentage(this.y, 10);
  },
  get textX () {
    return this.x + Utils.getPercentage(this.y, 50);
  },
}

const CURRENT_SCORE = {
  'y': Utils.getPercentage(SCORE.y, 65),
  'x': Utils.getPercentage(SCORE.x, 70),
  'text': 'Текущие очки',
}

const WIN_SCORE = {
  'y': Utils.getPercentage(MAX_SCORE.y, 65),
  'x': Utils.getPercentage(MAX_SCORE.x, 103),
  'text': 'Победа',
}

const PAUSE = {
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 150,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 10,
  }),
  'text': 'Пауза',
  'width': 562,
  'height': 209,
  'height': 209,
  get textY () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },
  get textX () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  },
  'buttonPath': './../img/icons/pause.png',
  'buttonWidth': Utils.getPercentage(GAME_SETTINGS.minWidth, 8),
  'buttonHeight': Utils.getPercentage(GAME_SETTINGS.minHeight, 10.4),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 1),
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 93) - (this.buttonWidth / 2);
  },
}

class Constants {

  static get block() {
    return BLOCK;
  }

  static get board() {
    return BOARD;
  }

  static get maxScore() {
    return MAX_SCORE;
  }

  static get pause() {
    return PAUSE;
  }

  static get progressBar() {
    return PROGRESS_BAR;
  }

  static get progressLine() {
    return PROGRESS_LINE;
  }

  static get game() {
    return GAME_SETTINGS;
  }

  static get currentScore() {
    return CURRENT_SCORE;
  }

  static get winScore() {
    return WIN_SCORE;
  }

  static get score() {
    return SCORE;
  }
}

export { Constants }

import { Utils } from './utils.js'

const GAME_SETTINGS = {
  'bgColor': 0xa1a1a1,
  'minWidth': 1187,
  'minHeight': 878,
  'columnsAmount': 9,
  'rowsAmount': 7,
  'minElementsDestroy': 2,
  'maxActions': 15,
  'winScore': 500,
  'startState': 0,
  'pauseState': 1,
  'loseState': 2,
  'winState': 3,
}

const GAME_STATES = ['start', 'pause', 'over', 'win'];

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
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 35.4),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 3.4),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 4.7),
  'x': Utils.getPercentage(GAME_SETTINGS.minWidth, 32.1),
}

const SCORE = {
  'path': './../img/icons/money-2.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 11.3),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 6.5),
  get y () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 12) - (this.height / 2);
  },
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 12) - (this.width / 2);
  },
}

const SCORE_TEXT = {
  'y': SCORE.y + Utils.getPercentage(SCORE.y, 10),
  'x': SCORE.x + Utils.getPercentage(SCORE.x, 50),
  'start': 0,
  'modifier': 10,
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 24,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 2,
  }),
}

const MAX_SCORE = {
  'path': './../img/icons/placeholder-purple.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 14.1),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 12),
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 83) - (this.width / 2);
  },
}

const MAX_SCORE_TEXT = {
  'y': MAX_SCORE.y + Utils.getPercentage(MAX_SCORE.y, 10),
  'x': MAX_SCORE.x + Utils.getPercentage(MAX_SCORE.y, 50),
}

const ACTIONS = {
  'path': './../img/icons/placeholder-purple.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 14.1),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 25),
  'x': MAX_SCORE.x,
}

const ACTIONS_LEFT_TEXT = {
  'y': Utils.getPercentage(ACTIONS.y, 105),
  'x': Utils.getPercentage(ACTIONS.x, 108),
}

const CURRENT_SCORE = {
  'y': Utils.getPercentage(SCORE.y, 65),
  'x': Utils.getPercentage(SCORE.x, 50),
  'text': 'Текущие очки',
}

const WIN_SCORE = {
  'y': Utils.getPercentage(MAX_SCORE.y, 65),
  'x': Utils.getPercentage(MAX_SCORE.x, 103),
  'text': 'Победа',
}

const ACTIONS_TEXT = {
  'y': Utils.getPercentage(ACTIONS.y, 80),
  'x': Utils.getPercentage(ACTIONS.x, 97),
  'text': 'Осталось ходов',
}

const TIME_TEXT = {
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 27.5),
  'x': Utils.getPercentage(GAME_SETTINGS.minWidth, 46),
  'text': 'Время:',
}

const RESTART_BUTTON = {
  'path': './../img/icons/placeholder-purple.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 17),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 85),
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 50) - (this.width / 2);
  },
}

const RESTART_TEXT = {
  'y': RESTART_BUTTON.y + Utils.getPercentage(RESTART_BUTTON.y, 1.5),
  'x': RESTART_BUTTON.x + Utils.getPercentage(RESTART_BUTTON.y, .4),
  'text': 'Играть снова',
}

const TIME = {
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 38),
  'x': Utils.getPercentage(GAME_SETTINGS.minWidth, 45.5),
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 80,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 5,
  }),
}

const FINAL_SCORE_TEXT = {
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 58),
  'x': Utils.getPercentage(GAME_SETTINGS.minWidth, 46),
  'text': 'Очки:',
}

const FINAL_SCORE = {
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 62),
  'x': Utils.getPercentage(GAME_SETTINGS.minWidth, 48),
}

const END_GAME_FRAME = {
  'path': './../img/icons/panel-score.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 31.8),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 46.8),
  get y () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },
  get x () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  },
}

const STATE_TEXTS = {
  'pause': 'Пауза',
  'win': 'Победа',
}

const CENTER_TEXT = {
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 150,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 10,
  }),
  'width': 562,
  'height': 209,
  get y () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },
  get x () {
    return Utils.getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  },
}

const PAUSE_BUTTON = {
  'path': './../img/icons/pause.png',
  'width': Utils.getPercentage(GAME_SETTINGS.minWidth, 8),
  'height': Utils.getPercentage(GAME_SETTINGS.minHeight, 10.4),
  'y': Utils.getPercentage(GAME_SETTINGS.minHeight, 1),
  get x () {
    return Utils.getPercentage(GAME_SETTINGS.minWidth, 93) - (this.width / 2);
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

  static get maxScoreText() {
    return MAX_SCORE_TEXT;
  }

  static get actionText() {
    return ACTIONS_TEXT;
  }

  static get pauseButton() {
    return PAUSE_BUTTON;
  }

  static get centerText() {
    return CENTER_TEXT;
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

  static get scoreText() {
    return SCORE_TEXT;
  }

  static get endGameFrame() {
    return END_GAME_FRAME;
  }

  static get actions() {
    return ACTIONS;
  }

  static get actionsLeftText() {
    return ACTIONS_LEFT_TEXT;
  }

  static get time() {
    return TIME;
  }

  static get timeText() {
    return TIME_TEXT;
  }

  static get finalScore() {
    return FINAL_SCORE;
  }

  static get finatlScoreText() {
    return FINAL_SCORE_TEXT;
  }

  static get restartButton() {
    return RESTART_BUTTON;
  }

  static get restartText() {
    return RESTART_TEXT;
  }

  static get stateTexts() {
    return STATE_TEXTS;
  }

  static get gameStates() {
    return GAME_STATES;
  }
}

export { Constants }

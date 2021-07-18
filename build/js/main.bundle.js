/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(4);

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
  'winState': 3
};
const GAME_STATES = ['start', 'pause', 'over', 'win'];
const PROGRESS_BAR = {
  'path': './../img/icons/progress-bar.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 38.4),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 10.5),
  'y': 0,

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  }

};
const BLOCK = {
  'colors': ['./../img/icons/blue-brick.png', './../img/icons/red-brick.png', './../img/icons/yellow-brick.png', './../img/icons/green-brick.png', './../img/icons/purple-brick.png'],
  'width': 50,
  'height': 50,
  'moveIndex': 60,
  'padding': 15,
  'spaceBetween': 10,
  'anchorPoint': .5
};
const BOARD = {
  'path': './../img/icons/gameplay.png',
  'padding': 20,

  get width() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getBoardSize(this.padding, BLOCK.width, GAME_SETTINGS.columnsAmount, BLOCK.spaceBetween);
  },

  get height() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getBoardSize(this.padding, BLOCK.height, GAME_SETTINGS.rowsAmount, BLOCK.spaceBetween);
  },

  get y() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  }

};
const PROGRESS_LINE = {
  'path': './../img/icons/progress-line.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 35.4),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 3.4),
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 4.7),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 32.1)
};
const SCORE = {
  'path': './../img/icons/money-2.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 11.3),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 6.5),

  get y() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 12) - this.height / 2;
  },

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 12) - this.width / 2;
  }

};
const SCORE_TEXT = {
  'y': SCORE.y + __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(SCORE.y, 10),
  'x': SCORE.x + __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(SCORE.x, 50),
  'start': 0,
  'modifier': 10,
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 24,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 2
  })
};
const MAX_SCORE = {
  'path': './../img/icons/placeholder-purple.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 14.1),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 12),

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 83) - this.width / 2;
  }

};
const MAX_SCORE_TEXT = {
  'y': MAX_SCORE.y + __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(MAX_SCORE.y, 10),
  'x': MAX_SCORE.x + __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(MAX_SCORE.y, 50)
};
const ACTIONS = {
  'path': './../img/icons/placeholder-purple.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 14.1),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 25),
  'x': MAX_SCORE.x
};
const ACTIONS_LEFT_TEXT = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(ACTIONS.y, 105),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(ACTIONS.x, 108)
};
const CURRENT_SCORE = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(SCORE.y, 65),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(SCORE.x, 50),
  'text': 'Текущие очки'
};
const WIN_SCORE = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(MAX_SCORE.y, 65),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(MAX_SCORE.x, 103),
  'text': 'Победа'
};
const ACTIONS_TEXT = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(ACTIONS.y, 80),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(ACTIONS.x, 97),
  'text': 'Осталось ходов'
};
const TIME_TEXT = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 27.5),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 46),
  'text': 'Время:'
};
const RESTART_BUTTON = {
  'path': './../img/icons/placeholder-purple.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 17),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 6.5),
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 85),

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 50) - this.width / 2;
  }

};
const RESTART_TEXT = {
  'y': RESTART_BUTTON.y + __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(RESTART_BUTTON.y, 1.5),
  'x': RESTART_BUTTON.x + __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(RESTART_BUTTON.y, .4),
  'text': 'Играть снова'
};
const TIME = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 38),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 45.5),
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 80,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 5
  })
};
const FINAL_SCORE_TEXT = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 58),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 46),
  'text': 'Очки:'
};
const FINAL_SCORE = {
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 62),
  'x': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 48)
};
const END_GAME_FRAME = {
  'path': './../img/icons/panel-score.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 31.8),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 46.8),

  get y() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  }

};
const STATE_TEXTS = {
  'pause': 'Пауза',
  'win': 'Победа'
};
const CENTER_TEXT = {
  'textStyle': new PIXI.TextStyle({
    fontFamily: 'Marvin-Shadow',
    fontSize: 150,
    fill: 'white',
    stroke: 'white',
    strokeThickness: 10
  }),
  'width': 562,
  'height': 209,

  get y() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minHeight, this.height);
  },

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getCenterCoordinates(GAME_SETTINGS.minWidth, this.width);
  }

};
const PAUSE_BUTTON = {
  'path': './../img/icons/pause.png',
  'width': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 8),
  'height': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 10.4),
  'y': __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minHeight, 1),

  get x() {
    return __WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* Utils */].getPercentage(GAME_SETTINGS.minWidth, 93) - this.width / 2;
  }

};

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



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generatedBoard; });
/* unused harmony export endGame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__frame_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__score_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__end_game_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pause_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_line_js__ = __webpack_require__(12);









let type = 'WebGL';

if (!PIXI.utils.isWebGLSupported()) {
  type = 'canvas';
}

let app = new PIXI.Application({
  width: __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game.minWidth,
  height: __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game.minHeight,
  backgroundColor: __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game.bgColor
});
document.body.appendChild(app.view);
const game = new __WEBPACK_IMPORTED_MODULE_7__game_js__["a" /* Game */]();
const restartButton = new __WEBPACK_IMPORTED_MODULE_2__frame_js__["a" /* Frame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].restartButton);
const restartText = new __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].restartText);
const score = new __WEBPACK_IMPORTED_MODULE_3__score_js__["a" /* Score */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].scoreText);
const progressLine = new __WEBPACK_IMPORTED_MODULE_8__progress_line_js__["a" /* ProgressLine */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].progressLine, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game.winScore);
const pauseButton = new __WEBPACK_IMPORTED_MODULE_6__pause_js__["a" /* PauseButton */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].pauseButton);
const endGame = new __WEBPACK_IMPORTED_MODULE_4__end_game_js__["a" /* EndGame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].endGameFrame, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].time, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].timeText, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].finalScore, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].finatlScoreText, restartButton, restartText);
const actionsLeft = new __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].actionsLeftText, endGame.actionsLeft);
const actionText = new __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].actionText);
const generatedBoard = new __WEBPACK_IMPORTED_MODULE_0__board_js__["a" /* Board */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].block, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].board, score, progressLine, endGame, actionsLeft);
const gameBoard = new __WEBPACK_IMPORTED_MODULE_2__frame_js__["a" /* Frame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].board);
const scoreFrame = new __WEBPACK_IMPORTED_MODULE_2__frame_js__["a" /* Frame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].score);
const maxScoreFrame = new __WEBPACK_IMPORTED_MODULE_2__frame_js__["a" /* Frame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].maxScore);
const maxScore = new __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].maxScoreText, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].game.winScore);
const actionsFrame = new __WEBPACK_IMPORTED_MODULE_2__frame_js__["a" /* Frame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].actions);
const progressBarFrame = new __WEBPACK_IMPORTED_MODULE_2__frame_js__["a" /* Frame */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].progressBar);
const currentScoreText = new __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].currentScore);
const winScoreText = new __WEBPACK_IMPORTED_MODULE_5__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].winScore);

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
  };
};

app.loader.add([__WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].block.colors[0], __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].block.colors[1], __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].block.colors[2], __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].block.colors[3], __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].block.colors[4], __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].score.path, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].maxScore.path, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].pauseButton.path, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].progressBar.path, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].progressLine.path, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].endGameFrame.path, __WEBPACK_IMPORTED_MODULE_1__constants_js__["a" /* Constants */].board.path]).load(setup());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Frame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__script_js__ = __webpack_require__(1);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _texture = /*#__PURE__*/new WeakMap();

class Frame extends PIXI.Sprite {
  constructor(options) {
    super();

    _texture.set(this, {
      writable: true,
      value: void 0
    });

    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;

    _classPrivateFieldSet(this, _texture, options.path);

    this.zOrder = 0;
  }

  setTextures() {
    this.texture = __WEBPACK_IMPORTED_MODULE_0__script_js__["a" /* app */].loader.resources[_classPrivateFieldGet(this, _texture)].texture;
  }

}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _x = /*#__PURE__*/new WeakMap();

var _y = /*#__PURE__*/new WeakMap();

class Text extends PIXI.Text {
  constructor(options, text, textStyle = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].scoreText.textStyle) {
    super();

    _x.set(this, {
      writable: true,
      value: void 0
    });

    _y.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _x, options.x);

    _classPrivateFieldSet(this, _y, options.y);

    this.text = text || options.text;
    this.style = textStyle;
    this.zOrder = 1;
    this.setTextPosition();
  }

  setTextPosition() {
    this.position.set(_classPrivateFieldGet(this, _x), _classPrivateFieldGet(this, _y));
  }

  changeCurrenttext(value) {
    this.text = value;
  }

}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
class Utils {
  static randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  static getCenterCoordinates(screenWidth, elementWidth) {
    return screenWidth / 2 - elementWidth / 2;
  }

  static getBoardSize(boardPadding, elementWidth, elementsAmount, spaceBetween) {
    return boardPadding + elementWidth * elementsAmount + elementsAmount * spaceBetween;
  }

  static getPercentage(num, percent) {
    return num / 100 * percent;
  }

  static sortRow(a, b) {
    return a.row - b.row;
  }

}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);


class Animation {
  static fallAnimation(delta, block) {
    let endCoordinate = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].board.y + block.row * (__WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.width + __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.spaceBetween) + __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.padding + __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.width * __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.anchorPoint;
    block.width = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.width;
    block.height = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.height;

    if (block.y <= endCoordinate) {
      block.y += 5 * delta;
    } else {
      block.y = endCoordinate;
      block.stopAnimation();
    }
  }

  static scaleAnimation(delta, block) {
    if (block.width <= __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.width) {
      block.width += 2 * delta;
      block.height += 2 * delta;
    } else {
      block.width = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.width;
      block.height = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.height;
      block.stopAnimation();
    }
  }

}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Board; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(4);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _columns = /*#__PURE__*/new WeakMap();

var _startCoordinateX = /*#__PURE__*/new WeakMap();

var _startCoordinateY = /*#__PURE__*/new WeakMap();

var _blockStartX = /*#__PURE__*/new WeakMap();

var _blockStartY = /*#__PURE__*/new WeakMap();

var _blockPadding = /*#__PURE__*/new WeakMap();

var _blockMoveIndex = /*#__PURE__*/new WeakMap();

var _boardX = /*#__PURE__*/new WeakMap();

var _boardY = /*#__PURE__*/new WeakMap();

var _blockWidth = /*#__PURE__*/new WeakMap();

var _blockHeight = /*#__PURE__*/new WeakMap();

var _anchorPoint = /*#__PURE__*/new WeakMap();

var _rows = /*#__PURE__*/new WeakMap();

var _animationFall = /*#__PURE__*/new WeakMap();

var _animationScale = /*#__PURE__*/new WeakMap();

var _minDestroyAmount = /*#__PURE__*/new WeakMap();

var _scoreInterface = /*#__PURE__*/new WeakMap();

var _progressInterface = /*#__PURE__*/new WeakMap();

var _endGameInterface = /*#__PURE__*/new WeakMap();

var _actionsInterface = /*#__PURE__*/new WeakMap();

var _isPlayable = /*#__PURE__*/new WeakMap();

var _minimalRows = /*#__PURE__*/new WeakMap();

var _minimalColumn = /*#__PURE__*/new WeakMap();

class Board {
  constructor(block, game, board, score, progressLine, endGame, actionCounter) {
    _columns.set(this, {
      writable: true,
      value: void 0
    });

    _startCoordinateX.set(this, {
      writable: true,
      value: void 0
    });

    _startCoordinateY.set(this, {
      writable: true,
      value: void 0
    });

    _blockStartX.set(this, {
      writable: true,
      value: void 0
    });

    _blockStartY.set(this, {
      writable: true,
      value: void 0
    });

    _blockPadding.set(this, {
      writable: true,
      value: void 0
    });

    _blockMoveIndex.set(this, {
      writable: true,
      value: void 0
    });

    _boardX.set(this, {
      writable: true,
      value: void 0
    });

    _boardY.set(this, {
      writable: true,
      value: void 0
    });

    _blockWidth.set(this, {
      writable: true,
      value: void 0
    });

    _blockHeight.set(this, {
      writable: true,
      value: void 0
    });

    _anchorPoint.set(this, {
      writable: true,
      value: void 0
    });

    _rows.set(this, {
      writable: true,
      value: void 0
    });

    _animationFall.set(this, {
      writable: true,
      value: void 0
    });

    _animationScale.set(this, {
      writable: true,
      value: void 0
    });

    _minDestroyAmount.set(this, {
      writable: true,
      value: void 0
    });

    _scoreInterface.set(this, {
      writable: true,
      value: void 0
    });

    _progressInterface.set(this, {
      writable: true,
      value: void 0
    });

    _endGameInterface.set(this, {
      writable: true,
      value: void 0
    });

    _actionsInterface.set(this, {
      writable: true,
      value: void 0
    });

    _isPlayable.set(this, {
      writable: true,
      value: void 0
    });

    _minimalRows.set(this, {
      writable: true,
      value: void 0
    });

    _minimalColumn.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "colorTypes", void 0);

    _classPrivateFieldSet(this, _blockMoveIndex, block.moveIndex);

    _classPrivateFieldSet(this, _blockPadding, block.padding);

    _classPrivateFieldSet(this, _boardX, board.x);

    _classPrivateFieldSet(this, _boardY, board.y);

    _classPrivateFieldSet(this, _blockWidth, block.width);

    _classPrivateFieldSet(this, _blockHeight, block.height);

    _classPrivateFieldSet(this, _anchorPoint, block.anchorPoint);

    _classPrivateFieldSet(this, _blockStartX, _classPrivateFieldGet(this, _boardX) + _classPrivateFieldGet(this, _blockPadding) + _classPrivateFieldGet(this, _blockWidth) * _classPrivateFieldGet(this, _anchorPoint));

    _classPrivateFieldSet(this, _blockStartY, _classPrivateFieldGet(this, _boardY) + _classPrivateFieldGet(this, _blockPadding) + _classPrivateFieldGet(this, _blockHeight) * _classPrivateFieldGet(this, _anchorPoint));

    _classPrivateFieldSet(this, _startCoordinateX, _classPrivateFieldGet(this, _blockStartX));

    _classPrivateFieldSet(this, _startCoordinateY, _classPrivateFieldGet(this, _blockStartY));

    this.colorTypes = block.colors;

    _classPrivateFieldSet(this, _minDestroyAmount, game.minElementsDestroy);

    _classPrivateFieldSet(this, _minimalColumn, game.columnsAmount);

    _classPrivateFieldSet(this, _minimalRows, game.rowsAmount);

    _classPrivateFieldSet(this, _actionsInterface, actionCounter);

    _classPrivateFieldSet(this, _isPlayable, false);

    _classPrivateFieldSet(this, _scoreInterface, score);

    _classPrivateFieldSet(this, _progressInterface, progressLine);

    _classPrivateFieldSet(this, _endGameInterface, endGame);

    _classPrivateFieldSet(this, _animationFall, 'fall');

    _classPrivateFieldSet(this, _animationScale, 'scale');

    this.reCreateStorages();
  }

  setBlocksInteractiveState(flag) {
    _classPrivateFieldGet(this, _rows).forEach(row => {
      row.forEach(column => {
        column.interactive = flag;
      });
    });
  }

  getTextures(colorStorage, value) {
    return __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].loader.resources[colorStorage[value]].texture;
  }

  createStorage(elementsAmount) {
    return new Array(elementsAmount).fill('');
  }

  reCreateStorages() {
    _classPrivateFieldSet(this, _columns, this.createStorage(_classPrivateFieldGet(this, _minimalColumn)));

    _classPrivateFieldSet(this, _rows, this.createStorage(_classPrivateFieldGet(this, _minimalRows)));
  }

  getCoordinate(startPoistion, blockPadding, positionIndex, distance, elementSize, anchorPoint) {
    return startPoistion + blockPadding + positionIndex * distance + elementSize * anchorPoint;
  }

  createBlock(options, row, column) {
    if (options) {
      return new __WEBPACK_IMPORTED_MODULE_0__block_js__["a" /* Block */](options);
    } else {
      const itemType = __WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* Utils */].randomInteger(0, 4);
      const options = {
        'texture': this.getTextures(this.colorTypes, itemType),
        'row': row,
        'column': column,
        'x': this.getCoordinate(_classPrivateFieldGet(this, _boardX), _classPrivateFieldGet(this, _blockPadding), column, _classPrivateFieldGet(this, _blockMoveIndex), _classPrivateFieldGet(this, _blockWidth), _classPrivateFieldGet(this, _anchorPoint)),
        'y': this.getCoordinate(_classPrivateFieldGet(this, _boardY), _classPrivateFieldGet(this, _blockPadding), row, _classPrivateFieldGet(this, _blockMoveIndex), _classPrivateFieldGet(this, _blockHeight), _classPrivateFieldGet(this, _anchorPoint)),
        'blockType': itemType
      };
      return new __WEBPACK_IMPORTED_MODULE_0__block_js__["a" /* Block */](options);
    }
  }

  get lineInterface() {
    return _classPrivateFieldGet(this, _progressInterface);
  }

  get scoreInterface() {
    return _classPrivateFieldGet(this, _scoreInterface);
  }

  reRenderBlock(block) {
    block.stopAnimation().setAnimation(_classPrivateFieldGet(this, _animationFall)).initAnimation().startAnimation();
  }

  moveBlocks(movableBlocks) {
    movableBlocks.sort(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* Utils */].sortRow).forEach(block => {
      this.moveBlockColumn(block.row, block.column);
    });
  }

  removeBlocks(removableBlocks) {
    removableBlocks.forEach(removableBlock => {
      __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.removeChild(removableBlock);
      const blockX = removableBlock.row;
      const blockY = removableBlock.column;
      _classPrivateFieldGet(this, _rows)[blockX][blockY] = null;
    });
  }

  checkSameType(row, column, type) {
    if (_classPrivateFieldGet(this, _rows)[row] && _classPrivateFieldGet(this, _rows)[row][column]) {
      if (_classPrivateFieldGet(this, _rows)[row][column].type === type) {
        _classPrivateFieldSet(this, _isPlayable, true);
      }
    }
  }

  checkAllColors() {
    _classPrivateFieldGet(this, _rows).map((row, rowIndex) => {
      row.map((column, columnIndex) => {
        if (_classPrivateFieldGet(this, _isPlayable)) return;
        this.checkSameType(rowIndex + 1, columnIndex, column.type);
        this.checkSameType(rowIndex - 1, columnIndex, column.type);
        this.checkSameType(rowIndex, columnIndex + 1, column.type);
        this.checkSameType(rowIndex, columnIndex - 1, column.type);
      });
    });
  }

  onBlockHit(hittedBlocks, blockRow, blockColumn, type) {
    if (_classPrivateFieldGet(this, _rows)[blockRow] && _classPrivateFieldGet(this, _rows)[blockRow][blockColumn]) {
      const currentBlock = _classPrivateFieldGet(this, _rows)[blockRow][blockColumn];

      if (!hittedBlocks.includes(currentBlock) && currentBlock.type === type) {
        hittedBlocks.push(currentBlock);
        this.onBlockHit(hittedBlocks, blockRow + 1, blockColumn, type);
        this.onBlockHit(hittedBlocks, blockRow - 1, blockColumn, type);
        this.onBlockHit(hittedBlocks, blockRow, blockColumn + 1, type);
        this.onBlockHit(hittedBlocks, blockRow, blockColumn - 1, type);
      }
    }
  }

  moveBlockColumn(blockX, blockY) {
    for (let i = blockX; i > 0; i--) {
      _classPrivateFieldGet(this, _rows)[i][blockY] = _classPrivateFieldGet(this, _rows)[i - 1][blockY];
      _classPrivateFieldGet(this, _rows)[i - 1][blockY] = null;

      if (_classPrivateFieldGet(this, _rows)[i][blockY]) {
        _classPrivateFieldGet(this, _rows)[i][blockY].row = i;
        this.reRenderBlock(_classPrivateFieldGet(this, _rows)[i][blockY]);
      }
    }
  }

  reFillBoard(blockStorage) {
    blockStorage.map((row, rowIndex) => {
      row.map((column, columnIndex) => {
        if (!column) {
          const createdBlock = this.createBlock(null, rowIndex, columnIndex);
          createdBlock.width = 0;
          createdBlock.height = 0;
          createdBlock.setAnimation(_classPrivateFieldGet(this, _animationScale)).initAnimation().startAnimation();
          createdBlock.on('mousedown', this.blockOnMouseDown());
          _classPrivateFieldGet(this, _rows)[rowIndex][columnIndex] = createdBlock;
          __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.addChild(createdBlock);
        }
      });
    });
  }

  clearBoard() {
    _classPrivateFieldGet(this, _rows).map(row => {
      row.map(column => {
        __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.removeChild(column);
      });
    });
  }

  blockOnMouseDown() {
    return eventData => {
      const target = eventData.target;
      const hittedBlocks = [];
      this.onBlockHit(hittedBlocks, target.row, target.column, target.type);
      if (hittedBlocks.length < _classPrivateFieldGet(this, _minDestroyAmount)) return;
      this.removeBlocks(hittedBlocks);
      this.moveBlocks(hittedBlocks);

      _classPrivateFieldGet(this, _scoreInterface).increaseCounter(hittedBlocks.length);

      _classPrivateFieldGet(this, _progressInterface).increaseWidth(_classPrivateFieldGet(this, _scoreInterface).currentScore);

      this.reFillBoard(_classPrivateFieldGet(this, _rows));
      this.checkAllColors();

      if (!_classPrivateFieldGet(this, _isPlayable)) {
        this.clearBoard();
        this.reCreateStorages();
        this.fillBlockStorage();
      }

      _classPrivateFieldSet(this, _isPlayable, false);

      _classPrivateFieldGet(this, _endGameInterface).increaseActions(_classPrivateFieldGet(this, _scoreInterface).currentScore);

      _classPrivateFieldGet(this, _actionsInterface).changeCurrenttext(_classPrivateFieldGet(this, _endGameInterface).actionsLeft);
    };
  }

  fillBlockStorage() {
    _classPrivateFieldSet(this, _rows, _classPrivateFieldGet(this, _rows).map((rowBlock, rowIndex) => {
      _classPrivateFieldSet(this, _columns, _classPrivateFieldGet(this, _columns).map((columnBlock, columnIndex) => {
        const itemType = __WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* Utils */].randomInteger(0, 4);
        const options = {
          'texture': this.getTextures(this.colorTypes, itemType),
          'x': _classPrivateFieldGet(this, _startCoordinateX),
          'y': _classPrivateFieldGet(this, _startCoordinateY),
          'row': rowIndex,
          'column': columnIndex,
          'blockType': itemType
        };
        columnBlock = this.createBlock(options);
        columnBlock.on('mousedown', this.blockOnMouseDown());
        __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.addChild(columnBlock);

        _classPrivateFieldSet(this, _startCoordinateX, _classPrivateFieldGet(this, _startCoordinateX) + _classPrivateFieldGet(this, _blockMoveIndex));

        return columnBlock;
      }));

      _classPrivateFieldSet(this, _startCoordinateX, _classPrivateFieldGet(this, _blockStartX));

      _classPrivateFieldSet(this, _startCoordinateY, _classPrivateFieldGet(this, _startCoordinateY) + _classPrivateFieldGet(this, _blockMoveIndex));

      return _classPrivateFieldGet(this, _columns);
    }));

    _classPrivateFieldSet(this, _startCoordinateX, _classPrivateFieldGet(this, _blockStartX));

    _classPrivateFieldSet(this, _startCoordinateY, _classPrivateFieldGet(this, _blockStartY));

    this.checkAllColors();

    if (!_classPrivateFieldGet(this, _isPlayable)) {
      this.clearBoard();
      this.reCreateStorages();
      this.fillBlockStorage();
    }

    _classPrivateFieldSet(this, _isPlayable, false);
  }

}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_js__ = __webpack_require__(5);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _ticker = /*#__PURE__*/new WeakMap();

var _type = /*#__PURE__*/new WeakMap();

var _animations = /*#__PURE__*/new WeakMap();

var _currentAnimation = /*#__PURE__*/new WeakMap();

class Block extends PIXI.Sprite {
  constructor(options) {
    super();

    _ticker.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "row", void 0);

    _defineProperty(this, "column", void 0);

    _type.set(this, {
      writable: true,
      value: void 0
    });

    _animations.set(this, {
      writable: true,
      value: void 0
    });

    _currentAnimation.set(this, {
      writable: true,
      value: void 0
    });

    this.texture = options.texture;
    this.x = options.x;
    this.y = options.y;
    this.row = options.row;
    this.column = options.column;
    this.interactive = true;

    _classPrivateFieldSet(this, _type, options.blockType);

    this.anchor.set(__WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.anchorPoint);

    _classPrivateFieldSet(this, _animations, {
      'fall': __WEBPACK_IMPORTED_MODULE_1__animation_js__["a" /* Animation */].fallAnimation,
      'scale': __WEBPACK_IMPORTED_MODULE_1__animation_js__["a" /* Animation */].scaleAnimation
    });

    _classPrivateFieldSet(this, _currentAnimation, 'fall');

    this.width = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.width;
    this.height = __WEBPACK_IMPORTED_MODULE_0__constants_js__["a" /* Constants */].block.height;
    this.initAnimation();
  }

  setAnimation(value) {
    _classPrivateFieldSet(this, _currentAnimation, value);

    return this;
  }

  initAnimation() {
    _classPrivateFieldSet(this, _ticker, new PIXI.Ticker());

    _classPrivateFieldGet(this, _ticker).add(delta => _classPrivateFieldGet(this, _animations)[_classPrivateFieldGet(this, _currentAnimation)](delta, this));

    return this;
  }

  startAnimation() {
    _classPrivateFieldGet(this, _ticker).start();
  }

  stopAnimation() {
    _classPrivateFieldGet(this, _ticker).stop();

    return this;
  }

  get type() {
    return _classPrivateFieldGet(this, _type);
  }

}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Score; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__text_js__ = __webpack_require__(3);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _count = /*#__PURE__*/new WeakMap();

var _modifier = /*#__PURE__*/new WeakMap();

class Score extends __WEBPACK_IMPORTED_MODULE_0__text_js__["a" /* Text */] {
  constructor(score) {
    super(score);

    _count.set(this, {
      writable: true,
      value: void 0
    });

    _modifier.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _count, score.start);

    _classPrivateFieldSet(this, _modifier, score.modifier);

    this.text = _classPrivateFieldGet(this, _count);
  }

  increaseCounter(value) {
    _classPrivateFieldSet(this, _count, _classPrivateFieldGet(this, _count) + value * _classPrivateFieldGet(this, _modifier));

    this.text = _classPrivateFieldGet(this, _count);
  }

  resetScore() {
    _classPrivateFieldSet(this, _count, 0);

    this.text = _classPrivateFieldGet(this, _count);
  }

  get currentScore() {
    return _classPrivateFieldGet(this, _count);
  }

}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndGame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__text_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_js__ = __webpack_require__(0);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _winScore = /*#__PURE__*/new WeakMap();

var _maxActions = /*#__PURE__*/new WeakMap();

var _actionsDone = /*#__PURE__*/new WeakMap();

var _timeCounter = /*#__PURE__*/new WeakMap();

var _currentScore = /*#__PURE__*/new WeakMap();

var _counterId = /*#__PURE__*/new WeakMap();

var _time = /*#__PURE__*/new WeakMap();

var _timeText = /*#__PURE__*/new WeakMap();

var _score = /*#__PURE__*/new WeakMap();

var _scoreText = /*#__PURE__*/new WeakMap();

var _restartButtonInterface = /*#__PURE__*/new WeakMap();

var _restartText = /*#__PURE__*/new WeakMap();

var _endGameElements = /*#__PURE__*/new WeakMap();

class EndGame extends __WEBPACK_IMPORTED_MODULE_0__frame_js__["a" /* Frame */] {
  constructor(endGameFrame, game, time, timeText, score, scoreText, restartButton, restartText) {
    super(endGameFrame);

    _winScore.set(this, {
      writable: true,
      value: void 0
    });

    _maxActions.set(this, {
      writable: true,
      value: void 0
    });

    _actionsDone.set(this, {
      writable: true,
      value: void 0
    });

    _timeCounter.set(this, {
      writable: true,
      value: void 0
    });

    _currentScore.set(this, {
      writable: true,
      value: void 0
    });

    _counterId.set(this, {
      writable: true,
      value: void 0
    });

    _time.set(this, {
      writable: true,
      value: void 0
    });

    _timeText.set(this, {
      writable: true,
      value: void 0
    });

    _score.set(this, {
      writable: true,
      value: void 0
    });

    _scoreText.set(this, {
      writable: true,
      value: void 0
    });

    _restartButtonInterface.set(this, {
      writable: true,
      value: void 0
    });

    _restartText.set(this, {
      writable: true,
      value: void 0
    });

    _endGameElements.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _winScore, game.winScore);

    _classPrivateFieldSet(this, _maxActions, game.maxActions);

    _classPrivateFieldSet(this, _actionsDone, 0);

    _classPrivateFieldSet(this, _timeCounter, 0);

    _classPrivateFieldSet(this, _currentScore, 0);

    _classPrivateFieldSet(this, _counterId, null);

    _classPrivateFieldSet(this, _time, time);

    _classPrivateFieldSet(this, _timeText, timeText);

    _classPrivateFieldSet(this, _score, score);

    _classPrivateFieldSet(this, _scoreText, scoreText);

    _classPrivateFieldSet(this, _restartButtonInterface, restartButton);

    _classPrivateFieldSet(this, _restartText, restartText);

    _classPrivateFieldGet(this, _restartButtonInterface).interactive = true;

    _classPrivateFieldGet(this, _restartButtonInterface).on('mousedown', this.createMouseDownHandler());

    _classPrivateFieldSet(this, _endGameElements, []);

    this.startCounter();
  }

  get actionsLeft() {
    return _classPrivateFieldGet(this, _maxActions) - _classPrivateFieldGet(this, _actionsDone);
  }

  get time() {
    return _classPrivateFieldGet(this, _timeCounter);
  }

  startCounter() {
    _classPrivateFieldSet(this, _counterId, setInterval(() => {
      var _this$timeCounter;

      return _classPrivateFieldSet(this, _timeCounter, (_this$timeCounter = +_classPrivateFieldGet(this, _timeCounter)) + 1), _this$timeCounter;
    }, 1000));
  }

  showEndGame() {
    clearInterval(_classPrivateFieldGet(this, _counterId));
    const timeText = new __WEBPACK_IMPORTED_MODULE_2__text_js__["a" /* Text */](_classPrivateFieldGet(this, _timeText));
    const time = new __WEBPACK_IMPORTED_MODULE_2__text_js__["a" /* Text */](_classPrivateFieldGet(this, _time), _classPrivateFieldGet(this, _timeCounter), _classPrivateFieldGet(this, _time).textStyle);
    const scoreText = new __WEBPACK_IMPORTED_MODULE_2__text_js__["a" /* Text */](_classPrivateFieldGet(this, _scoreText));
    const score = new __WEBPACK_IMPORTED_MODULE_2__text_js__["a" /* Text */](_classPrivateFieldGet(this, _score), _classPrivateFieldGet(this, _currentScore));
    time.anchor.x = -.1;

    _classPrivateFieldGet(this, _endGameElements).push(timeText, time, scoreText, score, this, _classPrivateFieldGet(this, _restartButtonInterface), _classPrivateFieldGet(this, _restartText));

    __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.addChild(this, _classPrivateFieldGet(this, _restartButtonInterface), _classPrivateFieldGet(this, _restartText), timeText, time, scoreText, score);
    __WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].changeState(__WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* Constants */].game.loseState);
  }

  resetCurrentState() {
    _classPrivateFieldSet(this, _actionsDone, 0);

    _classPrivateFieldSet(this, _timeCounter, 0);

    _classPrivateFieldSet(this, _currentScore, 0);

    _classPrivateFieldSet(this, _counterId, null);
  }

  createMouseDownHandler() {
    return () => {
      this.resetCurrentState();

      _classPrivateFieldGet(this, _endGameElements).forEach(element => __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.removeChild(element));

      _classPrivateFieldSet(this, _endGameElements, []);

      __WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].changeState(__WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* Constants */].game.startState);
      __WEBPACK_IMPORTED_MODULE_1__script_js__["c" /* generatedBoard */].lineInterface.resetLine();
      __WEBPACK_IMPORTED_MODULE_1__script_js__["c" /* generatedBoard */].scoreInterface.resetScore();
      this.startCounter();
    };
  }

  checkWin(currentScore) {
    _classPrivateFieldSet(this, _currentScore, currentScore);

    if (currentScore >= _classPrivateFieldGet(this, _winScore)) {
      return true;
    }
  }

  win() {
    clearInterval(_classPrivateFieldGet(this, _counterId));

    _classPrivateFieldGet(this, _endGameElements).push(_classPrivateFieldGet(this, _restartButtonInterface), _classPrivateFieldGet(this, _restartText));

    __WEBPACK_IMPORTED_MODULE_1__script_js__["a" /* app */].stage.addChild(_classPrivateFieldGet(this, _restartButtonInterface), _classPrivateFieldGet(this, _restartText));
    __WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].changeState(__WEBPACK_IMPORTED_MODULE_3__constants_js__["a" /* Constants */].game.winState);
  }

  increaseActions(currentScore) {
    var _this$actionsDone;

    _classPrivateFieldSet(this, _actionsDone, (_this$actionsDone = +_classPrivateFieldGet(this, _actionsDone)) + 1), _this$actionsDone;

    if (this.checkWin(currentScore)) {
      this.win();
      return;
    }

    this.checkActionsStatus();
  }

  checkActionsStatus() {
    if (_classPrivateFieldGet(this, _actionsDone) >= _classPrivateFieldGet(this, _maxActions)) {
      this.showEndGame();
    }
  }

}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PauseButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(0);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _increasedSize = /*#__PURE__*/new WeakMap();

var _isOnPause = /*#__PURE__*/new WeakMap();

class PauseButton extends __WEBPACK_IMPORTED_MODULE_0__frame_js__["a" /* Frame */] {
  constructor(pause) {
    super(pause);

    _increasedSize.set(this, {
      writable: true,
      value: void 0
    });

    _isOnPause.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _increasedSize, 10);

    this.interactive = true;
    this.on('mouseover', this.onMouseOver);
    this.on('mouseout', this.onMouseOut);
    this.on('mousedown', this.onMouseDownButton);

    _classPrivateFieldSet(this, _isOnPause, false);
  }

  onMouseOver() {
    this.width += _classPrivateFieldGet(this, _increasedSize);
    this.height += _classPrivateFieldGet(this, _increasedSize);
    this.x -= _classPrivateFieldGet(this, _increasedSize) / 2;
  }

  onMouseOut() {
    this.width -= _classPrivateFieldGet(this, _increasedSize);
    this.height -= _classPrivateFieldGet(this, _increasedSize);
    this.x += _classPrivateFieldGet(this, _increasedSize) / 2;
  }

  onMouseDownButton() {
    if (__WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].getCurrentState() === 'over' || __WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].getCurrentState() === 'win') {
      return;
    }

    if (_classPrivateFieldGet(this, _isOnPause)) {
      _classPrivateFieldSet(this, _isOnPause, false);

      __WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].changeState(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].game.startState);
      return;
    }

    _classPrivateFieldSet(this, _isOnPause, true);

    __WEBPACK_IMPORTED_MODULE_1__script_js__["b" /* game */].changeState(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].game.pauseState);
  }

}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__script_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(0);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _states = /*#__PURE__*/new WeakMap();

var _currentState = /*#__PURE__*/new WeakMap();

class Game {
  constructor() {
    _states.set(this, {
      writable: true,
      value: void 0
    });

    _currentState.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _states, [new Start(), new PauseState(), new End(), new Win()]);

    _classPrivateFieldSet(this, _currentState, _classPrivateFieldGet(this, _states)[0]);
  }

  changeState(index) {
    if (_classPrivateFieldGet(this, _currentState).destroy) {
      _classPrivateFieldGet(this, _currentState).destroy();
    }

    _classPrivateFieldSet(this, _currentState, _classPrivateFieldGet(this, _states)[index]);

    this.play();
  }

  getCurrentState() {
    return _classPrivateFieldGet(this, _currentState).state;
  }

  play() {
    _classPrivateFieldGet(this, _currentState).play();
  }

}

class State {
  constructor(state) {
    this.state = state;
  }

}

class Start extends State {
  constructor() {
    super(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].gameStates[0]);
  }

  play() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["c" /* generatedBoard */].setBlocksInteractiveState(true);
  }

}

var _win = /*#__PURE__*/new WeakMap();

class Win extends State {
  constructor() {
    super(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].gameStates[3]);

    _win.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _win, new __WEBPACK_IMPORTED_MODULE_1__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].centerText, __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].stateTexts.win, __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].centerText.textStyle));

    _classPrivateFieldGet(this, _win).anchor.x = .1;
  }

  destroy() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["a" /* app */].stage.removeChild(_classPrivateFieldGet(this, _win));
  }

  play() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["c" /* generatedBoard */].setBlocksInteractiveState(false);
    __WEBPACK_IMPORTED_MODULE_0__script_js__["a" /* app */].stage.addChild(_classPrivateFieldGet(this, _win));
  }

}

var _pause = /*#__PURE__*/new WeakMap();

class PauseState extends State {
  constructor() {
    super(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].gameStates[1]);

    _pause.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _pause, new __WEBPACK_IMPORTED_MODULE_1__text_js__["a" /* Text */](__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].centerText, __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].stateTexts.pause, __WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].centerText.textStyle));
  }

  setElementsNonInteractive() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["c" /* generatedBoard */].setBlocksInteractiveState(false);
  }

  createPauseNotification() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["a" /* app */].stage.addChild(_classPrivateFieldGet(this, _pause));
  }

  destroy() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["a" /* app */].stage.removeChild(_classPrivateFieldGet(this, _pause));
  }

  play() {
    this.setElementsNonInteractive();
    this.createPauseNotification();
  }

}

class End extends State {
  constructor() {
    super(__WEBPACK_IMPORTED_MODULE_2__constants_js__["a" /* Constants */].gameStates[2]);
  }

  play() {
    __WEBPACK_IMPORTED_MODULE_0__script_js__["c" /* generatedBoard */].setBlocksInteractiveState(false);
  }

}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__frame_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(4);
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _maxWidth = /*#__PURE__*/new WeakMap();

var _maxScore = /*#__PURE__*/new WeakMap();

class ProgressLine extends __WEBPACK_IMPORTED_MODULE_0__frame_js__["a" /* Frame */] {
  constructor(progressLine, maxScore) {
    super(progressLine);

    _maxWidth.set(this, {
      writable: true,
      value: void 0
    });

    _maxScore.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _maxWidth, progressLine.width);

    this.width = 0;

    _classPrivateFieldSet(this, _maxScore, maxScore);
  }

  resetLine() {
    this.width = 0;
  }

  increaseWidth(currentScore) {
    let currentWidth = __WEBPACK_IMPORTED_MODULE_1__utils_js__["a" /* Utils */].getPercentage(_classPrivateFieldGet(this, _maxWidth), 100 / (_classPrivateFieldGet(this, _maxScore) / currentScore));

    if (currentWidth > _classPrivateFieldGet(this, _maxWidth)) {
      this.width = _classPrivateFieldGet(this, _maxWidth);
      return;
    }

    this.width = currentWidth;
  }

}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pause_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__end_game_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_line_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__board_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__frame_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__score_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_js__ = __webpack_require__(11);














/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map
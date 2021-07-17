import { Block } from "./block.js"
import { app } from './script.js'
import { Utils } from './utils.js'

class Board {
  #columns;
  #startCoordinateX;
  #startCoordinateY;
  #blockStartX;
  #blockStartY;
  #blockPadding;
  #blockMoveIndex;
  #boardX;
  #boardY;
  #blockWidth;
  #blockHeight;
  #anchorPoint;
  #rows;
  #animationFall;
  #animationScale;
  #minDestroyAmount;
  #scoreInterface;
  #progressInterface;
  #endGameInterface;
  #actionsInterface;
  colorTypes;


  constructor (block, game, board, score, progressLine, endGame, actionCounter) {
    this.#blockMoveIndex = block.moveIndex;
    this.#blockPadding = block.padding;
    this.#boardX = board.x;
    this.#boardY = board.y;
    this.#blockWidth = block.width;
    this.#blockHeight = block.height;
    this.#anchorPoint = block.anchorPoint;
    this.#blockStartX = this.#boardX + this.#blockPadding + (this.#blockWidth * this.#anchorPoint);
    this.#blockStartY = this.#boardY + this.#blockPadding + (this.#blockHeight * this.#anchorPoint);
    this.#startCoordinateX = this.#blockStartX;
    this.#startCoordinateY = this.#blockStartY;
    this.colorTypes = block.colors;
    this.#minDestroyAmount = game.minElementsDestroy;
    this.#actionsInterface = actionCounter;

    this.#scoreInterface = score;
    this.#progressInterface = progressLine;
    this.#endGameInterface = endGame;

    this.#animationFall = 'fall';
    this.#animationScale = 'scale';

    this.#columns = this.createStorage(game.columnsAmount);
    this.#rows = this.createStorage(game.rowsAmount);
  }

  setBlocksInteractiveState(flag) {
    this.#rows.forEach(row => {
      row.forEach(column => {
        column.interactive = flag;
      })
    })
  }

  getTextures (colorStorage, value) {
    return app.loader.resources[colorStorage[value]].texture;
  }

  createStorage (elementsAmount) {
    return new Array(elementsAmount).fill('');
  }

  getCoordinate (startPoistion, blockPadding, positionIndex, distance, elementSize, anchorPoint) {
    return (startPoistion + blockPadding) + (positionIndex * distance) + (elementSize * anchorPoint);
  }

  createBlock (options, row, column) {
    if (options) {
      return new Block(options);
    } else {
      const itemType = Utils.randomInteger(0, 4);
      const options = {
        'texture': this.getTextures(this.colorTypes, itemType),
        'row': row,
        'column': column,
        'x': this.getCoordinate(this.#boardX, this.#blockPadding, column, this.#blockMoveIndex, this.#blockWidth, this.#anchorPoint),
        'y': this.getCoordinate(this.#boardY, this.#blockPadding, row, this.#blockMoveIndex, this.#blockHeight, this.#anchorPoint),
        'blockType': itemType,
      }
      return new Block(options);
    }
  }

  get lineInterface() {
    return this.#progressInterface;
  }

  get scoreInterface() {
    return this.#scoreInterface;
  }

  reRenderBlock (block) {
    block.stopAnimation().setAnimation(this.#animationFall).initAnimation().startAnimation();
  }

  moveBlocks (movableBlocks) {
    movableBlocks.sort(Utils.sortRow).forEach(block => {
      this.moveBlockColumn(block.row, block.column);
    });
  }

  removeBlocks (removableBlocks) {
    removableBlocks.forEach(removableBlock => {
      app.stage.removeChild(removableBlock);
      const blockX = removableBlock.row;
      const blockY = removableBlock.column;
      this.#rows[blockX][blockY] = null;
    });
  }

  onBlockHit (hittedBlocks, blockRow, blockColumn, type) {
    if (this.#rows[blockRow] && this.#rows[blockRow][blockColumn]) {
      const currentBlock = this.#rows[blockRow][blockColumn];
      if (!hittedBlocks.includes(currentBlock) && currentBlock.type === type) {
        hittedBlocks.push(currentBlock);
        this.onBlockHit(hittedBlocks, blockRow + 1, blockColumn, type);
        this.onBlockHit(hittedBlocks, blockRow - 1, blockColumn, type);
        this.onBlockHit(hittedBlocks, blockRow, blockColumn + 1, type);
        this.onBlockHit(hittedBlocks, blockRow, blockColumn - 1, type);
      }
    }
  }

  moveBlockColumn (blockX, blockY) {
    for (let i = blockX; i > 0; i--) {
      this.#rows[i][blockY] = this.#rows[i - 1][blockY];
      this.#rows[i - 1][blockY] = null;
      if (this.#rows[i][blockY]) {
        this.#rows[i][blockY].row = i;
        this.reRenderBlock(this.#rows[i][blockY]);
      }
    }
  }

  reFillBoard (blockStorage) {
    blockStorage.map((row, rowIndex) => {
      row.map((column, columnIndex) => {
        if (!column) {
          const createdBlock = this.createBlock(null, rowIndex, columnIndex);
          createdBlock.width = 0;
          createdBlock.height = 0;
          createdBlock.setAnimation(this.#animationScale).initAnimation().startAnimation();
          createdBlock.on('mousedown', this.blockOnMouseDown());
          this.#rows[rowIndex][columnIndex] = createdBlock;
          app.stage.addChild(createdBlock);
        }
      })
    })
  }

  blockOnMouseDown () {
    return (eventData) => {
      const target = eventData.target;
      const hittedBlocks = [];
      this.onBlockHit(hittedBlocks, target.row, target.column, target.type);
      if (hittedBlocks.length < this.#minDestroyAmount) return;
      this.removeBlocks(hittedBlocks);
      this.moveBlocks(hittedBlocks);
      this.#scoreInterface.increaseCounter(hittedBlocks.length);
      this.#progressInterface.increaseWidth(this.#scoreInterface.currentScore);
      this.reFillBoard(this.#rows);
      this.#endGameInterface.increaseActions(this.#scoreInterface.currentScore);
      this.#actionsInterface.changeCurrenttext(this.#endGameInterface.actionsLeft);
    }
  }

  fillBlockStorage () {
    this.#rows = this.#rows.map((rowBlock, rowIndex) => {
      this.#columns = this.#columns.map((columnBlock, columnIndex) => {
        const itemType = Utils.randomInteger(0, 4);

        const options = {
          'texture': this.getTextures(this.colorTypes, itemType),
          'x': this.#startCoordinateX,
          'y': this.#startCoordinateY,
          'row': rowIndex,
          'column': columnIndex,
          'blockType': itemType,
        };

        columnBlock = this.createBlock(options);

        columnBlock.on('mousedown', this.blockOnMouseDown());

        app.stage.addChild(columnBlock);

        this.#startCoordinateX += this.#blockMoveIndex;
        return columnBlock;
      });

      this.#startCoordinateX = this.#blockStartX;
      this.#startCoordinateY += this.#blockMoveIndex;
      return this.#columns;
    });
  }
}

export {
  Board
}

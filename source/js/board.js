import { Block } from "./block.js"
import { Constants } from "./constants.js";
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
  colorTypes;

  constructor (blockPadding, blockMoveIndex, elements, boardX, boardY, colorStorage, blockWidth, blockHeight, anchorPoint) {
    this.#blockMoveIndex = blockMoveIndex;
    this.#blockPadding = blockPadding;
    this.#boardX = boardX;
    this.#boardY = boardY;
    this.#blockStartX = this.#boardX + this.#blockPadding + (Constants.blockWidth * .5);
    this.#blockStartY = this.#boardY + this.#blockPadding + (Constants.blockHeight * .5);
    this.#startCoordinateX = this.#blockStartX;
    this.#startCoordinateY = this.#blockStartY;
    this.#blockWidth = blockWidth;
    this.#blockHeight = blockHeight;
    this.#anchorPoint = anchorPoint;
    this.colorTypes = colorStorage;

    this.createColumns(elements);
  }

  getTextures (colorStorage, value) {
    return app.loader.resources[colorStorage[value]].texture;
  }

  createColumns (elementsAmount) {
    this.#columns = new Array(elementsAmount).fill('');
  }

  getCoordinate(startPoistion, blockPadding, positionIndex, distance, elementSize, anchorPoint) {
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
        //'y': Constants.boardCoordinateY - (7 - row) * 60 - 60,
        'y': this.getCoordinate(this.#boardY, this.#blockPadding, row, this.#blockMoveIndex, this.#blockHeight, this.#anchorPoint),
        'blockType': itemType,
      }
      return new Block(options);
    }
  }

  fillBlockStorage (rowsAmount) {
    let filledStorage = new Array(rowsAmount).fill('');
    filledStorage = filledStorage.map((rowBlock, rowIndex) => {
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
        this.#startCoordinateX += this.#blockMoveIndex;

        app.stage.addChild(columnBlock);

        return columnBlock;
      });

      this.#startCoordinateX = this.#blockStartX;
      this.#startCoordinateY += this.#blockMoveIndex;
      return this.#columns;
    });
    return filledStorage;
  }
}

export {
  Board
}

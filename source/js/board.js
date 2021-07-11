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
  colorTypes;

  constructor (elements, boardX, boardY, colorStorage) {
    this.#blockMoveIndex = 60;
    this.#blockPadding = 15;
    this.#blockStartX = boardX + this.#blockPadding;
    this.#blockStartY = boardY + this.#blockPadding;
    this.#startCoordinateX = this.#blockStartX;
    this.#startCoordinateY = this.#blockStartY;
    this.colorTypes = colorStorage;

    this.createColumns(elements);
  }

  getTextures (colorStorage, value) {
    return app.loader.resources[colorStorage[value]].texture;
  }

  createColumns (elementsAmount) {
    this.#columns = new Array(elementsAmount).fill('');
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

        columnBlock = new Block(options);
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

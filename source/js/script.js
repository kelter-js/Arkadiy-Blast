//import {Block} from './block.js'
import { Board } from './board.js'
import { Constants } from './constants.js'

let generatedBoard = new Board(
  Constants.columnsAmount,
  Constants.boardCoordinateX,
  Constants.boardCoordinateY,
  Constants.blockColors
);

let blocks;

const setup = (img) => {
  return () => {
    let board = new PIXI.Sprite(app.loader.resources[`./../img/icons/${img}.png`].texture);

    board.x = Constants.boardCoordinateX;
    board.y = Constants.boardCoordinateY;

    board.width = Constants.boardWidth;
    board.height = Constants.boardHeight;

    app.stage.addChild(board);
    blocks = generatedBoard.fillBlockStorage(Constants.rowsAmount);
  }
}

let type = "WebGL"

if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

let app = new PIXI.Application({
  width: Constants.minWidth,
  height: Constants.minHeight,
  backgroundColor: Constants.bgColor,
});

/**
 * передвигает элементы в колонке, меняя элементы по координатам
 * @param {*} x индекс элемента по горизонтали
 * @param {*} y индекс элемента по вертикали
 */
const moveBlockColumn = (blockX, blockY) => {
  for (let i = blockX; i > 0; i--) {
    blocks[i][blockY] = blocks[i - 1][blockY];
    blocks[i - 1][blockY] = null;
    if (blocks[i][blockY]) {
      blocks[i][blockY].row = i;
      reRenderBlock(blocks[i][blockY]);
    }
  }
}

const onMouseDown = (eventData) => {
  let target = eventData.target;
  hittedBlocks = [];
  onBlockHit(target.row, target.column, target.type);
  if (hittedBlocks.length < 2) return;
  removeBlocks(hittedBlocks);
  moveBlocks(hittedBlocks);
  return target;
}

document.body.appendChild(app.view);

app.loader
  .add("./../img/icons/gameplay.png")
  .add([Constants.blockColors[0],
    Constants.blockColors[1],
    Constants.blockColors[2],
    Constants.blockColors[3],
    Constants.blockColors[4]])
  .load(setup('gameplay'));

let hittedBlocks = [];

const reRenderBlock = (block) => {
  block.stopAnimation();
  block.startAnimation();
  //block.alpha = 0.5;
}

const blockAnimation = (delta, block) => {
  let endCoordinate = Constants.boardCoordinateY + block.row * (Constants.blockWidth + Constants.spaceBetweenBlock) + 15;
  if (block.y <= endCoordinate) {
    block.y += 5 * delta;
  } else {
    block.y = endCoordinate;
    block.stopAnimation();
  }
}

const moveBlocks = (movableBlocks) => {
  movableBlocks.sort((a, b) => a.row - b.row).forEach(block => {
    moveBlockColumn(block.row, block.column);
  });
}

const removeBlocks = (removableBlocks) => {
  removableBlocks.forEach(removableBlock => {
    app.stage.removeChild(removableBlock);
    let blockX = removableBlock.row;
    let blockY = removableBlock.column;
    blocks[blockX][blockY] = null;
  });
}

/**
 * проверяет элементы вокруг выбранного на соответствие типа (цвета)
 * @param {*} x индекс элемента по горизонтали
 * @param {*} y индекс элемента по вертикали
 * @param {*} type сравниваемый тип (цвет)
 */
const onBlockHit = (blockRow, blockColumn, type) => {
  if (blocks[blockRow] && blocks[blockRow][blockColumn]) {
    let currentBlock = blocks[blockRow][blockColumn];
    if (!hittedBlocks.includes(currentBlock) && currentBlock.type === type) {
      hittedBlocks.push(currentBlock);
      onBlockHit(blockRow + 1, blockColumn, type);
      onBlockHit(blockRow - 1, blockColumn, type);
      onBlockHit(blockRow, blockColumn + 1, type);
      onBlockHit(blockRow, blockColumn - 1, type);
    }
  }
}

export {
  onMouseDown,
  blockAnimation,
  blocks,
  app
}

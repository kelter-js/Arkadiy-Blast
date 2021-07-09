const BG_COLOR = '0xa1a1a1';

const BLOCK_WIDTH = 50;
const SPACE_BETWEEN_BLOCK = 10;
const N = 9;
const M = 7;

const MIN_WIDTH = 1180;
const MIN_HEIGHT = 1800;

const BOARD_COORDINATE_X = 100;
const BOARD_COORDINATE_Y = 100;

const BLOCK_COLORS = {
  0: "./../img/icons/blue-brick.png",
  1: "./../img/icons/red-brick.png",
  2: "./../img/icons/yellow-brick.png",
  3: "./../img/icons/green-brick.png",
  4: "./../img/icons/purple-brick.png",
};

/**
 * передвигает элементы в колонке, меняя элементы по координатам
 * @param {*} x индекс элемента по горизонтали
 * @param {*} y индекс элемента по вертикали
 */
const moveColumn = (x, y) => {
  for (let i = x; i > 0; i--) {
    blocks[i][y] = blocks[i - 1][y];
    blocks[i - 1][y] = null;
    if (blocks[i][y]) {
      blocks[i][y].row = i;
      reRenderBlock(blocks[i][y]);
    }
  }
}

let blocks = new Array(M).fill(1);

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const createBlock = (colorId) => {
  let block = new PIXI.Sprite(app.loader.resources[BLOCK_COLORS[colorId]].texture);

  block.width = 50;
  block.height = BLOCK_WIDTH;

  return block;
}

let hittedBlocks = [];

const reRenderBlock = (block) => {
  block.ticker.stop();
  block.ticker.start();
  //block.alpha = 0.5;
}

const blockAnimation = (delta, block) => {
  let endCoordinate = BOARD_COORDINATE_Y + block.row * (BLOCK_WIDTH + SPACE_BETWEEN_BLOCK) + 10;
  if (block.y <= endCoordinate) {
    block.y += 5 * delta;
  } else {
    block.y = endCoordinate;
    block.ticker.stop();
  }
}

const moveBlocks = () => {
  hittedBlocks.sort((a, b) => a.row - b.row).forEach(block => {
    moveColumn(block.row, block.column);
  });

  /*
  for (let i = 0; i <= hittedBlocks.length - 1; i++) {
    let block = hittedBlocks[i];
    let currentBlockY = block.column;
    let currentBlockX = block.row;
    for (let j = currentBlockX; j > 0; j--) {
      blocks[j][currentBlockY] = blocks[j - 1][currentBlockY];
      console.log(blocks);
    }
    blocks[0][currentBlockY] = null;
  }
  */
}

const removeBlocks = removableBlocks => {
  removableBlocks.forEach(block => {
    app.stage.removeChild(block);
    let x = block.row;
    let y = block.column;
    blocks[x][y] = null;
  });
}

const onMouseDown = (eventData) => {
  let target = eventData.target;
  hittedBlocks = [];
  onBlockHit(target.row, target.column, target.type);
  if (hittedBlocks.length < 2) return;
  removeBlocks(hittedBlocks);
  moveBlocks();
  return target;
}
/**
 * проверяет элементы вокруг выбранного на соответствие типа (цвета)
 * @param {*} x индекс элемента по горизонтали
 * @param {*} y индекс элемента по вертикали
 * @param {*} type сравниваемый тип (цвет)
 */
const onBlockHit = (x, y, type) => {
  if (blocks[x] && blocks[x][y]) {
    let currentBlock = blocks[x][y];
    if (!hittedBlocks.includes(currentBlock)) {
      if (currentBlock.type === type) {
        hittedBlocks.push(currentBlock);
        onBlockHit(x + 1, y, type);
        onBlockHit(x - 1, y, type);
        onBlockHit(x, y + 1, type);
        onBlockHit(x, y - 1, type);
      }
    }
  }
}

const generateBoard = () => {
  let row = new Array(N).fill(1);

  let startCoordinateX = BOARD_COORDINATE_X + 5;
  let startCoordinateY = BOARD_COORDINATE_Y + 10;

  blocks = blocks.map((brick, i) => {
    row = row.map((item, j) => {
      let itemType = randomInteger(0, 4);

      item = createBlock(itemType);

      item.x = startCoordinateX;
      item.y = startCoordinateY;

      item.row = i;
      item.column = j;

      item.ticker = new PIXI.Ticker();
      item.ticker.add(delta => blockAnimation(delta, item));
      item.ticker.stop();

      item.type = itemType;

      item.interactive = true;
      item.on('mousedown', onMouseDown);

      startCoordinateX += 60;

      app.stage.addChild(item);

      return item;
    });
    startCoordinateY += 60;
    startCoordinateX = BOARD_COORDINATE_X + 5;
    return row;
  })
}

const setup = (img) => {
  return () => {
    let cat = new PIXI.Sprite(app.loader.resources[`./../img/icons/${img}.png`].texture);

    cat.x = BOARD_COORDINATE_X;
    cat.y = BOARD_COORDINATE_Y;

    cat.width = (BLOCK_WIDTH * N) + (N * SPACE_BETWEEN_BLOCK);
    cat.height = 500;
    app.stage.addChild(cat);
    generateBoard();
  }
}

let type = "WebGL"

if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

let app = new PIXI.Application({
  width: MIN_WIDTH,
  height: MIN_HEIGHT,
  backgroundColor: BG_COLOR,
});

document.body.appendChild(app.view);

app.loader
  .add("./../img/icons/gameplay.png")
  .add([BLOCK_COLORS[0], BLOCK_COLORS[1], BLOCK_COLORS[2], BLOCK_COLORS[3], BLOCK_COLORS[4]])
  .load(setup('gameplay'));

const BG_COLOR = '0xa1a1a1';
const MIN_WIDTH = 1180;
const MIN_HEIGHT = 1800;

const BOARD_COORDINATE_X = 100;
const BOARD_COORDINATE_Y = 100;

const N = 9;
const M = 7;

const BLOCK_COLORS = {
  0: "./../img/icons/blue-brick.png",
  1: "./../img/icons/red-brick.png",
  2: "./../img/icons/yellow-brick.png",
  3: "./../img/icons/green-brick.png",
  4: "./../img/icons/purple-brick.png",
};

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const createBlock = (colorId) => {
  let block = new PIXI.Sprite(app.loader.resources[BLOCK_COLORS[colorId]].texture);

  block.width = 50;
  block.height = 50;

  return block;
}

const removeBlock = (row, column) => {
  app.stage.removeChild(bricks[row][column]);
}

const onMouseDown = (eventData) => {
  let target = eventData.target;
  return target;
}

const generateBoard = () => {
  let bricks = new Array(M).fill(1);
  let arr = new Array(N).fill(1);

  let startCoordinateX = BOARD_COORDINATE_X + 5;
  let startCoordinateY = BOARD_COORDINATE_Y + 5;

  bricks = bricks.map((brick, i) => {
    arr = arr.map((item, j) => {
      let itemType = randomInteger(0, 4);

      item = createBlock(itemType);

      item.x = startCoordinateX;
      item.y = startCoordinateY;

      item.row = i;
      item.column = j;
      item.type = itemType;

      item.interactive = true;
      item.on('mousedown', onMouseDown);

      startCoordinateX += 60;

      app.stage.addChild(item);

      return item;
    });
    startCoordinateY += 60;
    startCoordinateX = BOARD_COORDINATE_X + 5;
    return arr;
  })
  app.stage.removeChild(bricks[3][4]);
}

const setup = (img) => {
  return () => {
    let cat = new PIXI.Sprite(app.loader.resources[`./../img/icons/${img}.png`].texture);

    cat.x = BOARD_COORDINATE_X;
    cat.y = BOARD_COORDINATE_Y;

    cat.width = 550;
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

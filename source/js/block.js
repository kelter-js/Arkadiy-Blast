import {
  onMouseDown,
  blockAnimation,
} from './script.js'

import { Constants } from './constants.js'

class Block extends PIXI.Sprite {
  #ticker;
  row;
  column;
  #type;

  constructor (options) {
    super();
    this.texture = options.texture;
    this.x = options.x;
    this.y = options.y;
    this.row = options.row;
    this.column = options.column;
    this.#type = options.blockType;

    this.width = Constants.blockWidth;
    this.height = Constants.blockHeight;

    this.interactive = true;
    this.on('mousedown', onMouseDown);

    this.#createTicker();
  }

  #createTicker() {
    this.#ticker = new PIXI.Ticker();
    this.#ticker.add(delta => blockAnimation(delta, this));
  }

  startAnimation() {
    this.#ticker.start();
  }

  stopAnimation() {
    this.#ticker.stop();
  }

  get type() {
    return this.#type;
  }
}

export {Block}

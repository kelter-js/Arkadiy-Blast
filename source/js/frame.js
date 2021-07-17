import { app } from './script.js'

class Frame extends PIXI.Sprite {
  #texture;

  constructor(options) {
    super();
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.#texture = options.path;
    this.zOrder = 0;
  }

  setTextures () {
    this.texture = app.loader.resources[this.#texture].texture;
  }
}

export { Frame }

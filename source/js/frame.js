import { app } from './script.js'

class Frame extends PIXI.Sprite {
  #texture;

  constructor(x, y, width, height, texture) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.#texture = texture;
    this.zOrder = 0;
  }

  setTextures () {
    this.texture = app.loader.resources[this.#texture].texture;
  }
}

export { Frame }

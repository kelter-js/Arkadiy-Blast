import { app } from './script.js'

class ScoreFrame extends PIXI.Sprite {
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

  getTextures () {
    this.texture = app.loader.resources[this.#texture].texture;
  }
}

export { ScoreFrame }

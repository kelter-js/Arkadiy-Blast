import { Constants } from './constants.js'
import { Animation } from './animation.js'

class Block extends PIXI.Sprite {
  #ticker;
  row;
  column;
  #type;
  #animations;
  #currentAnimation;

  constructor (options) {
    super();
    this.texture = options.texture;
    this.x = options.x;
    this.y = options.y;
    this.row = options.row;
    this.column = options.column;
    this.interactive = true;
    this.#type = options.blockType;
    this.anchor.set(Constants.block.anchorPoint);

    this.#animations = {
      'fall': Animation.fallAnimation,
      'scale': Animation.scaleAnimation,
    };

    this.#currentAnimation = this.#animations.fall;

    this.width = Constants.block.width;
    this.height = Constants.block.height;

    this.initAnimation();
  }

  setAnimation(value) {
    this.#currentAnimation = value;
    return this;
  }

  initAnimation() {
    this.#ticker = new PIXI.Ticker();
    this.#ticker.add(delta => this.#animations[this.#currentAnimation](delta, this));
    return this;
  }

  startAnimation() {
    this.#ticker.start();
    return this;
  }

  stopAnimation() {
    this.#ticker.stop();
    return this;
  }

  get type() {
    return this.#type;
  }
}

export { Block }

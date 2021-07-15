import { Frame } from './frame.js'
import { Utils } from './utils.js'

class ProgressLine extends Frame {
  #maxWidth;

  constructor(x, y, width, height, texture) {
    super(x, y, width, height, texture);
    this.#maxWidth = width;
    this.width = 0;
  }

  increaseWidth(currentScore, winScore) {
    let currentWidth = Utils.getPercentage(this.#maxWidth, 100 / (winScore / currentScore));
    if (currentWidth > this.#maxWidth) {
      this.width = this.#maxWidth;
      return;
    }
    this.width = currentWidth;
  }
}

export { ProgressLine }

import { Frame } from './frame.js'
import { Utils } from './utils.js'

class ProgressLine extends Frame {
  #maxWidth;
  #maxScore;

  constructor(progressLine, maxScore) {
    super(progressLine);
    this.#maxWidth = progressLine.width;
    this.width = 0;
    this.#maxScore = maxScore;
  }

  resetLine() {
    this.width = 0;
  }

  increaseWidth(currentScore) {
    let currentWidth = Utils.getPercentage(this.#maxWidth, 100 / (this.#maxScore / currentScore));
    if (currentWidth > this.#maxWidth) {
      this.width = this.#maxWidth;
      return;
    }
    this.width = currentWidth;
  }
}

export { ProgressLine }

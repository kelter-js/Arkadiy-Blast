import { Text } from './text.js'

class Score extends Text {
  #count;
  #modifier;

  constructor(startAmount, modifier, x, y) {
    super(x, y, 0);
    this.#count = startAmount;
    this.#modifier = modifier;
    this.text = this.#count;
    this.zOrder = 1;
  }

  increaseCounter(value) {
    this.#count += value * this.#modifier;
    this.text = this.#count;
  }

  get currentScore() {
    return this.#count;
  }
}

export { Score }

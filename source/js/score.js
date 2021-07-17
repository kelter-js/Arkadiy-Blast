import { Text } from './text.js'

class Score extends Text {
  #count;
  #modifier;

  constructor(score) {
    super(score);
    this.#count = score.start;
    this.#modifier = score.modifier;
    this.text = this.#count;
  }

  increaseCounter(value) {
    this.#count += value * this.#modifier;
    this.text = this.#count;
  }

  resetScore() {
    this.#count = 0;
    this.text = this.#count;
  }

  get currentScore() {
    return this.#count;
  }
}

export { Score }

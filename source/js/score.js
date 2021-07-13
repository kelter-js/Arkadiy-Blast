class Score extends PIXI.Text {
  #count;
  #modifier;

  constructor(startAmount, modifier, textStyle) {
    super();
    this.#count = startAmount;
    this.#modifier = modifier;
    this.text = this.#count;
    this.style = textStyle;
    this.zOrder = 1;
  }

  setText(x, y) {
    this.position.set(x, y);
  }

  increaseCounter(value) {
    this.#count += value * this.#modifier;
    this.text = String(this.#count);
  }
}

export { Score }

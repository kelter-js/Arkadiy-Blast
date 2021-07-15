class Rule {
  #winScore;
  #maxActions;
  #actions;

  constructor(winScore, maxActions) {
    this.#winScore = winScore;
    this.#maxActions = maxActions;
    this.#actions = 0;
  }

  checkScore(currentScore) {
    this.#actions++;
    if (currentScore >= this.#winScore) {
      return true;
    }
  }

  checkStatus() {
    if (this.#actions >= this.#maxActions) {
      return false;
    }
  }
}

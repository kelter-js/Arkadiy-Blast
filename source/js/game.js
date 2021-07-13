import { app, blocks } from './script.js'

class Game {
  #states;
  #currentState;

  constructor() {
    this.#states = [new Start(), new Pause(), new Over()];
    this.#currentState = this.#states[0];
  }

  changeState(index) {
    this.#currentState = this.#states[index];
  }

  play() {
    this.#currentState.play();
  }
}

class State {
  constructor(state) {
    this.state = state;
  }
}

class Start extends State {
  constructor() {
    super('start');
  }

  play() {
    return 'start';
  }
}

class Pause extends State {
  constructor() {
    super('pause');
  }

  setElementsNonInteractive() {
    /*
    let sprites = [];
    app.loader.onComplete.once(() => {
      sprites = app.stage.children.filter(block => block.row).forEach(block => block.interactive = false);
    });
    */
  }

  play() {
    this.setElementsNonInteractive();
  }
}

class Over extends State {
  constructor() {
    super('over');
  }

  play() {
    return 'over';
  }
}

let game = new Game();
game.changeState(1);
game.play();
/*
class TrafficLight {
  constructor() {
      this.states = [new GreenLight(), new RedLight(), new YellowLight()];
      this.current = this.states[0];
  }
  change() {
      const totalStates = this.states.length;
      let currentIndex = this.states.findIndex(light => light === this.current);
      if (currentIndex + 1 < totalStates) this.current = this.states[currentIndex + 1];
      else this.current = this.states[0];
  }
  sign() {
      return this.current.sign();
  }
}
class Light {
  constructor(light) {
      this.light = light;
  }
}
class RedLight extends Light {
  constructor() {
      super('red');
  }
  sign() {
      return 'STOP';
  }
}
class YellowLight extends Light {
  constructor() {
      super('yellow');
  }
  sign() {
      return 'STEADY';
  }
}
class GreenLight extends Light {
  constructor() {
      super('green');
  }
  sign() {
      return 'GO';
  }
}
// usage
const trafficLight = new TrafficLight();
console.log(trafficLight.sign()); // 'GO'
trafficLight.change();
console.log(trafficLight.sign()); // 'STOP'
trafficLight.change();
console.log(trafficLight.sign()); // 'STEADY'
trafficLight.change();
console.log(trafficLight.sign()); // 'GO'
trafficLight.change();
console.log(trafficLight.sign()); // 'STOP'
*/

import { Constants } from './constants.js'

class Animation {
  static fallAnimation(delta, block) {
    let endCoordinate = (
      Constants.board.y + block.row * (Constants.block.width + Constants.block.spaceBetween) +
      Constants.block.padding + Constants.block.width * Constants.block.anchorPoint
    );
    block.width = Constants.block.width;
    block.height = Constants.block.height;
    if (block.y <= endCoordinate) {
      block.y += 5 * delta;
    } else {
      block.y = endCoordinate;
      block.stopAnimation();
    }
  }

  static scaleAnimation (delta, block) {
    if (block.width <= Constants.block.width) {
      block.width += 2 * delta;
      block.height += 2 * delta;
    } else {
      block.width = Constants.block.width;
      block.height = Constants.block.height;
      block.stopAnimation();
    }
  }
}

export { Animation }

import { Constants } from './constants.js'

class Animation {
  static fallAnimation(delta, block) {
    let endCoordinate = (
      Constants.boardCoordinateY + block.row * (Constants.blockWidth + Constants.spaceBetweenBlock) +
      Constants.blockPadding + Constants.blockWidth * Constants.blockAnchorPoint
    );
    block.width = Constants.blockWidth;
    block.height = Constants.blockHeight;
    if (block.y <= endCoordinate) {
      block.y += 5 * delta;
    } else {
      block.y = endCoordinate;
      block.stopAnimation();
    }
  }

  static scaleAnimation (delta, block) {
    if (block.width <= Constants.blockWidth) {
      block.width += 2 * delta;
      block.height += 2 * delta;
    } else {
      block.width = Constants.blockWidth;
      block.height = Constants.blockHeight;
      block.stopAnimation();
    }
  }
}

export { Animation }

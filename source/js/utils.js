class Utils {
  static randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  static getCenterCoordinates(screenWidth, elementWidth) {
    return (screenWidth / 2) - (elementWidth / 2);
  }

  static getBoardSize(boardPadding, elementWidth, elementsAmount, spaceBetween) {
    return boardPadding + (elementWidth * elementsAmount) + (elementsAmount * spaceBetween);
  }

  static getPercentage(num, percent) {
    return (num / 100) * percent;
  }
}

export { Utils }

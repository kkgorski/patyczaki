const Const = require('../common/constants');

class Game {
  constructor(socket) {
  this.x = Math.floor(Math.random() * (Const.MAX_WIDTH + 1));
  this.y = Math.floor(Math.random() * (Const.MAX_HEIGHT + 1));
  this.clamp();
  socket.emit(Const.MSG.STC_POSITION, {x: this.x, y: this.y});

  console.log('Player connected! Emitting initial position! ', socket.id, this.x, this.y);
  }

  clamp() {
    const _clamp = (num, min, max) => {
      return num <= min ? min : num >= max ? max : num;
    }

    this.x = _clamp(this.x, 0, Const.MAX_WIDTH - Const.PLAYER_WIDTH);
    this.y = _clamp(this.y, 0, Const.MAX_HEIGHT - Const.PLAYER_HEIGHT);
  }

  emitPositionBasedOnKeydown(socket, key) {
    switch(key) {
      case "ArrowLeft":
        this.x -= 5;
        break;
      case "ArrowRight":
        this.x += 5;
        break;
      case "ArrowUp":
        this.y -= 5;
        break;
      case "ArrowDown":
        this.y += 5;
        break;
    }
    this.clamp();
    socket.emit(Const.MSG.STC_POSITION, {x: this.x, y: this.y});
  }
}

module.exports = Game;

const Const = require('../common/constants');

const _clamp = (num, min, max) => {
  return num <= min ? min : num >= max ? max : num;
}

const clampX = (x) => {
  return _clamp(x, 0, Const.MAX_WIDTH - Const.PLAYER_WIDTH);
}

const clampY = (y) => {
  return _clamp(y, 0, Const.MAX_HEIGHT - Const.PLAYER_HEIGHT);
}

class Game {
  constructor(socket) {
    this.state = [];
    this.socket = socket;

    console.log('Game set up!', socket.id, this.state);
  }

  addPlayers(players) {
    players.forEach( (player) =>{
      const x = clampX(Math.floor(Math.random() * (Const.MAX_WIDTH + 1)));
      const y = clampY(Math.floor(Math.random() * (Const.MAX_HEIGHT + 1)));
      const item = {
        x: x,
        y: y,
        type: Const.TYPE.PLAYER,
        name: player.name
      };
      this.state.push(item);
    });
    console.log('Players added!', this.socket.id, this.state);
  }

  updateAfterKeydown(playerKeydown) {
  const playerState = this.state.find((item) => (item.name == playerKeydown.name));
    switch(playerKeydown.direction) {
      case Const.DIR.LEFT:
        playerState.x -= 5;
        break;
      case Const.DIR.RIGHT:
        playerState.x += 5;
        break;
      case Const.DIR.UP:
        playerState.y -= 5;
        break;
      case Const.DIR.DOWN:
        playerState.y += 5;
        break;
    }
    playerState.x = clampX(playerState.x);
    playerState.y = clampY(playerState.y);
  }

  emitGameState()
  {
    this.socket.emit(Const.MSG.STC_GAME_STATE, this.state);
  }
}

module.exports = Game;

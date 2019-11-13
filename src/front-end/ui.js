import {emit} from './client.js';
const Const = require('../common/constants');

const playerKeyMappings = [];

export const setupPlayerMapping = (players) =>{
  players.forEach((player) => {
    const playerKeyMapping = {
      name: player.name,
      keyMapping: new Map()
    };
    playerKeyMappings.push(playerKeyMapping);
  });
}

export const setupDefaultKeyMappingForPlayer1 = () => {
  const player1KeyMapping = playerKeyMappings.find((playerMapping) => {return playerMapping.name == 'kuba';});
  player1KeyMapping.keyMapping.set("ArrowLeft", Const.ACTION.LEFT);
  player1KeyMapping.keyMapping.set("ArrowRight", Const.ACTION.RIGHT);
  player1KeyMapping.keyMapping.set("ArrowUp", Const.ACTION.UP);
  player1KeyMapping.keyMapping.set("ArrowDown", Const.ACTION.DOWN);
  player1KeyMapping.keyMapping.set("0", Const.ACTION.FIRE);
  console.log('setup player mappings', player1KeyMapping);
}

export const setupDefaultKeyMappingForPlayer2 = () => {
  const player2KeyMapping = playerKeyMappings.find((playerMapping) => {return playerMapping.name == 'grzybek';});
  player2KeyMapping.keyMapping.set("a", Const.ACTION.LEFT);
  player2KeyMapping.keyMapping.set("d", Const.ACTION.RIGHT);
  player2KeyMapping.keyMapping.set("w", Const.ACTION.UP);
  player2KeyMapping.keyMapping.set("s", Const.ACTION.DOWN);
  player2KeyMapping.keyMapping.set("v", Const.ACTION.FIRE);
  console.log('setup player mappings', player2KeyMapping);
}

const mapEventToPlayerDirectionAndSendToServer = (event) => {
  for (const playerKeyMapping of playerKeyMappings){
    if(playerKeyMapping.keyMapping.has(event.key)) {
      emit(Const.MSG.CTS_PLAYER_KEYDOWN, {name: playerKeyMapping.name, action: playerKeyMapping.keyMapping.get(event.key)});
    }
  }
}

export const onKeydown = (event) => {
  if(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].indexOf(event.key) > -1) {
    event.preventDefault();
  }
  mapEventToPlayerDirectionAndSendToServer(event);
}


import {connect} from './client.js';
import {downloadAssets} from './assets.js';
import {startRendering} from './render.js';
import {emit} from './client.js';
import {setupPlayerMapping} from './ui.js';
import {setupDefaultKeyMappingForPlayer1} from './ui.js';
import {setupDefaultKeyMappingForPlayer2} from './ui.js';
import {onKeydown} from './ui.js';

const Const = require('../common/constants');
//import styles from './app.module';

const gameMenu = document.getElementById('game-menu');
const playerMenu = document.getElementById('player-menu');
const newGameButton= document.getElementById('new-game-button');
const onePlayerButton = document.getElementById('one-player-button');
const twoPlayerButton = document.getElementById('two-player-button');

Promise.all([
  downloadAssets(),
  connect(),
]).then(() => {
  newGameButton.onclick = setupNewGame;
  onePlayerButton.onclick = makeOnePlayerGame;
  twoPlayerButton.onclick = makeTwoPlayerGame;
}).catch(console.error);

const setupNewGame = () => {
  emit(Const.MSG.CTS_GAME_SETUP);
  gameMenu.classList.add('hidden');
  playerMenu.classList.remove('hidden');
}

const makeOnePlayerGame = () => {
  let players = [{name: 'kuba'}];
  setupPlayerMapping(players);
  setupDefaultKeyMappingForPlayer1();
  emit(Const.MSG.CTS_PLAYERS_SETUP, players);
  window.addEventListener('keydown', onKeydown);
  startRendering();
  playerMenu.classList.add('hidden');
}

const makeTwoPlayerGame = () => {
  let players = [{name: 'kuba'}, {name: 'grzybek'}];
  setupPlayerMapping(players);
  setupDefaultKeyMappingForPlayer1();
  setupDefaultKeyMappingForPlayer2();
  emit(Const.MSG.CTS_PLAYERS_SETUP, players);
  window.addEventListener('keydown', onKeydown);
  startRendering();
  playerMenu.classList.add('hidden');
}

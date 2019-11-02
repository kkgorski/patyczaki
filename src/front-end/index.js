import {connect} from './client.js';
import {onKeydown} from './ui.js';
import {downloadAssets} from './assets.js';
import {addPlayer} from './item.js';
import {startRendering} from './render.js';
import {emit} from './client.js';
const Const = require('../common/constants');
//import styles from './app.module';

const gameMenu = document.getElementById('game-menu');
const playerMenu = document.getElementById('player-menu');
const newGameButton= document.getElementById('new-game-button');
const onePlayerButton = document.getElementById('one-player-button');

Promise.all([
  downloadAssets(),
  connect(),
]).then(() => {
  newGameButton.onclick = setupNewGame;
  onePlayerButton.onclick = makeOnePlayerGame;
}).catch(console.error);

const setupNewGame = () => {
  emit(Const.MSG.CTS_GAME_SETUP);
  gameMenu.classList.add('hidden');
  playerMenu.classList.remove('hidden');
}

const makeOnePlayerGame = () => {
  window.addEventListener('keydown', onKeydown);
  addPlayer();
  startRendering();
  playerMenu.classList.add('hidden');
}


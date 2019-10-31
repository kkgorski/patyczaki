import {connect} from './client.js';
import {onKeydown} from './ui.js';
import {downloadAssets} from './assets.js';
import {addPlayer} from './item.js';
import {startRendering} from './render.js';
import styles from './app.module';

const menu = document.getElementById('menu');
const onePlayerButton = document.getElementById('one-player-button');

Promise.all([
  downloadAssets(),
  connect(),
]).then(() => {
  onePlayerButton.onclick = makeOnePlayerGame;
}).catch(console.error);

const makeOnePlayerGame = () => {
  window.addEventListener('keydown', onKeydown);
  addPlayer();
  startRendering();
  menu.classList.add(styles.hidden);
}


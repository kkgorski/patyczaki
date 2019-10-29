import {connect} from './client.js';
import {onKeydown} from './ui.js';
import {downloadAssets} from './assets.js';
import {makeNewItem} from './item.js';
import {startRendering} from './render.js';

Promise.all([
  downloadAssets(),
  connect(),
]).then(() => {
  window.addEventListener('keydown', onKeydown);
  makeNewItem();
  startRendering();
}).catch(console.error);

console.log("Finished script");


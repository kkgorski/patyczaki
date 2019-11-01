import {getItem} from './item.js';
const Const = require('../common/constants');

let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");

function render() {
  context.fillStyle = "#CDCDCD";
  context.fillRect(0, 0, Const.MAX_WIDTH, Const.MAX_HEIGHT);
  let item = getItem();
  context.drawImage(item.img, item.x, item.y);
}

export function startRendering() {
  canvas.width = Const.MAX_WIDTH;
  canvas.height = Const.MAX_HEIGHT;
  setInterval(render, 1000 / 6);
  console.log('start rendering finished!')
}

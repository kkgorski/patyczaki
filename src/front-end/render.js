import {getItem} from './item.js';
const Const = require('../common/constants');

let canvas = document.getElementById("game-canvas");
canvas.width = Const.MAX_WIDTH;
canvas.height = Const.MAX_HEIGHT;
let context = canvas.getContext("2d");

function render() {
  context.fillStyle = "#CDCDCD";
  context.fillRect(0, 0, Const.MAX_WIDTH, Const.MAX_HEIGHT);
  let item = getItem();
  context.drawImage(item.img, item.x, item.y);
}

export function startRendering(item) {
  let renderInterval = setInterval(render, 1000 / 6);
}

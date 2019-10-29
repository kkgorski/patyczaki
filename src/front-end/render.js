import {getItem} from './item.js';

let canvas = document.getElementById("game-canvas");
canvas.width = 800;
canvas.height = 800;
let context = canvas.getContext("2d");

function render() {
  context.fillStyle = "#CDCDCD";
  context.fillRect(0, 0, 500, 500);
  let item = getItem();
  context.drawImage(item.img, item.x, item.y);
}

export function startRendering(item) {
  let renderInterval = setInterval(render, 1000 / 6);
}

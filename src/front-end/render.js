import {getAsset} from './assets.js';
const Const = require('../common/constants');

let canvas = document.getElementById("game-canvas");
let context = canvas.getContext("2d");
let items = [];

export const updateItems = (gameState) => {
  items = gameState.map( (gameStateItem) => {
    return {
      x: gameStateItem.x,
      y: gameStateItem.y,
      img: getAsset('patyczak.png'),
      type: gameStateItem.type,
      name: gameStateItem.name
    };
  });
}

function render() {
  context.fillStyle = "#CDCDCD";
  context.fillRect(0, 0, Const.MAX_WIDTH, Const.MAX_HEIGHT);
  items.forEach((renderable) => {
    context.drawImage(renderable.img, renderable.x, renderable.y);
    if(renderable.type === Const.TYPE.PLAYER){
      context.fillStyle = "red";
      context.font = "14px Arial";
      context.textBaseline = "middle";
      context.fillText(renderable.name, renderable.x + (Const.PLAYER_WIDTH / 2), renderable.y + 14);
    }
  }
  );
}

export function startRendering() {
  canvas.width = Const.MAX_WIDTH;
  canvas.height = Const.MAX_HEIGHT;
  setInterval(render, 1000 / 6);
  console.log('start rendering finished!');
}

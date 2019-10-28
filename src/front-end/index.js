import {connect} from './client.js';
import {onKeydown} from './ui.js';

var canvas = document.getElementById("game-canvas");
canvas.width = 800;
canvas.height = 800;
console.log("Setting Canvas");

var context = canvas.getContext("2d");
context.fillStyle = "#CDCDCD";
context.fillRect(0, 0, 500, 500);
console.log("Drawing Rect");

var img = new Image();
img.onload = () => {
  console.log("Downloading patyczak");
  context.drawImage(img, 0, 0);
  };
img.onerror = (errorMsg, url, lineNumber, column, errorObj) => {
  console.log(errorMsg);
  console.log(url)
  };

img.src = '/assets/patyczak.png';
Promise.all(
  [connect()],
).then(() => {
  window.addEventListener('keydown', onKeydown);
}).catch(console.error);

console.log("Finished script");



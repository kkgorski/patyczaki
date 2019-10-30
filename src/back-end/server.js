const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const socketio = require('socket.io');

const webpackConfig = require('../../webpack.dev.js');
const Const = require('../common/constants');
// Setup an Express server
const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));

// Listen on port
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Server listening on port ${port}`);

// Setup socket.io
const io = socketio(server);

let position = {
  x: 0,
  y: 0
}

io.on('connection', socket => {
  position.x = Math.floor(Math.random() * (Const.MAX_WIDTH + 1));
  position.y = Math.floor(Math.random() * (Const.MAX_HEIGHT + 1));
  position = clamp(position);
  socket.emit(Const.MSG.STC_POSITION, position);

  console.log('Player connected! Emitting initial position! ', socket.id, position);

  socket.on(Const.MSG.CTS_KEYDOWN, (key) => {emitPositionBasedOnKeydown(socket, key)});
});

const clamp = (position) => {
  const _clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
  }

  position.x = _clamp(position.x, 0, Const.MAX_WIDTH - Const.PLAYER_WIDTH);
  position.y = _clamp(position.y, 0, Const.MAX_HEIGHT - Const.PLAYER_WIDTH);
  return position;
}

const emitPositionBasedOnKeydown = (socket, key) => {
  switch(key) {
    case "ArrowLeft":
      position.x -= 5;
      break;
    case "ArrowRight":
      position.x += 5;
      break;
    case "ArrowUp":
      position.y -= 5;
      break;
    case "ArrowDown":
      position.y += 5;
      break;
  }
  position = clamp(position);
  socket.emit(Const.MSG.STC_POSITION, position);
};

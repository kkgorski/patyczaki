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

const connectedPromise = new Promise(resolve => {
  io.on('connection', socket => {
    console.log('Player connected!', socket.id);
    resolve(socket);
  });
});

let position = {
  x: 0,
  y: 0
}

connectedPromise.then((socket) => {
  socket.on(Const.MSG.CTS_KEYDOWN, (key) => {
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
    socket.emit(Const.MSG.STC_POSITION, position);
  });
});

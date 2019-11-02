const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const socketio = require('socket.io');

const webpackConfig = require('../../webpack.dev.js');
const Const = require('../common/constants');

const Game = require('./game.js');

// Setup an Express server
const app = express();
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));

// Listen on port
const port = process.env.PORT || 3000;
const server = app.listen(port);
console.log(`Server listening on port ${port}`);

let game = null;

// Setup socket.io
const io = socketio(server);
io.on('connection', socket => {
  socket.on(Const.MSG.CTS_GAME_SETUP, () => {game = new Game(socket);});
  socket.on(Const.MSG.CTS_KEYDOWN, (key) => {game.emitPositionBasedOnKeydown(socket, key)});
});


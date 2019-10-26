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

connectedPromise.then((socket) => {
  socket.on(Const.MSG.CTS_HELLO, () => {
    console.log('received hello!! Emiting STC.Welcome');
    socket.emit(Const.MSG.STC_WELCOME);
  });
});

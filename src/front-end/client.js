import io from 'socket.io-client'

const Const = require('../common/constants');

const socket = io(`ws://${window.location.host}`, { reconnection: false });

export const connectAndSayHello = () => {
socket.on('connection', () => {
  console.log('Connected to server');
  resolve();
  });
}

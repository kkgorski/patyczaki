import io from 'socket.io-client'

const Const = require('../common/constants');

const socket = io(`ws://${window.location.host}`, { reconnection: false });

const connectedPromise = new Promise(resolve => {
  socket.on('connect', () => {
    console.log('Connected to server!');
    resolve();
  });
});

export const connect = () => { connectedPromise.then(() => {
  socket.on(Const.MSG.STC_WELCOME, () => {
    console.log('Received welcome from server!');
  });
  socket.emit(Const.MSG.CTS_HELLO);
});
};

export const emit = (msg, msgEvent) => {
  console.log('Sending to server', msgEvent);
  socket.emit(msg, msgEvent);
};

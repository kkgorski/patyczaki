import io from 'socket.io-client'
import {updateItems} from './render.js';

const Const = require('../common/constants');

const socket = io(`ws://${window.location.host}`, { reconnection: false });

const connectedPromise = new Promise(resolve => {
  socket.on('connect', () => {
    console.log('Connected to server!');
    resolve();
  });
});

export const connect = () => { connectedPromise.then(() => {
  socket.on(Const.MSG.STC_GAME_STATE, (gameState) => {
    console.log('Received game state from server!', gameState);
    updateItems(gameState);
  });
});
};

export const emit = (msg, msgEvent) => {
  console.log('Sending to server', msgEvent);
  socket.emit(msg, msgEvent);
};

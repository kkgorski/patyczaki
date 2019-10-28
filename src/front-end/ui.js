import {emit} from './client.js';
const Const = require('../common/constants');

export function onKeydown(event) {
  if(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].indexOf(event.key) > -1) {
    event.preventDefault();
    if(event.key != " ")
      emit(Const.MSG.CTS_KEYDOWN, event.key);
  }
}

import {getAsset} from './assets.js';

class Item {
  constructor(x, y, img)
  {
    this.x = x;
    this.y = y;
    this.img = img;
  }
  setPosition(x,y)
  {
    this.x = x;
    this.y = y;
  }
}

let item = new Item(0,0, null);

export const makeNewItem = () => {
  item = new Item(0, 0, getAsset('patyczak.png'));
}

export const setItemPosition = (position) => {
  item.setPosition(position.x,position.y);
}
export const getItem = () => {
  return item;
};

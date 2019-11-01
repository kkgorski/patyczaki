import {getAsset} from './assets.js';

class Item {
  constructor(x, y, img)
  {
    this.x = x;
    this.y = y;
    this.img = img;
  }
  setPosition(position)
  {
    this.x = position.x;
    this.y = position.y;
  }
  setImg(img)
  {
    this.img = img;
  }
}

let item = new Item(0,0, null);

export const addPlayer = () => {
  item.setImg(getAsset('patyczak.png'));
  console.log('added Player!');
}

export const setItemPosition = (position) => {
  item.setPosition(position);
}

export const setItemDirection = (direction) => {
  item.setDirection(direction);
}

export const getItem = () => {
  return item;
};

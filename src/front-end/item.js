import {getAsset} from './assets.js';

class Item {
  constructor(x, y, img)
  {
    this.x = x;
    this.y = y;
    this.img = img;
    this.direction = 0; //degrees from y axis, clockwise
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
  setDirection(direction)
  {
    this.direction = 0; //degrees from y axis, clockwise
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

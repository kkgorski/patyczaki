const assets = {};

const ASSET_NAMES = [
  'patyczak.png',
  'bullet.png',
]

const downloadedPromise = Promise.all(ASSET_NAMES.map(downloadAsset));

function downloadAsset(assetName){
  return new Promise(resolve => {
  const image = new Image();
  image.onload = () => {
    assets[assetName] = image;
    console.log("downloading ", assetName);
    resolve();
  };
  image.src = `/assets/${assetName}`;
  });
}

export const downloadAssets = () => downloadedPromise;

export const getAsset = assetName => assets[assetName];

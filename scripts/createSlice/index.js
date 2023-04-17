const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const mapLayers = {
  f: 'features',
  e: 'entities',
  p: 'pages'
};

const shortNames = Object.keys(mapLayers);
const fullNames = Object.values(mapLayers);

const isShortName = shortNames.includes(layer);

if (!layer || (!shortNames.includes(layer) && !fullNames.includes(layer))) {
  throw new Error(`Укажите слой ${fullNames.join(' или ')}`);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

createTemplate(isShortName ? mapLayers[layer] : layer, sliceName);

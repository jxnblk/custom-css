// example data build script

var fs = require('fs');
var path = require('path');

var generateData = require('../tasks/data');

var data;
var options = {};

options.modules = [
  'basscss-base-reset',
  'basscss-base-forms',
  'basscss-base-buttons',
  'basscss-base-tables',
  'basscss-base-typography',

  'basscss-utility-layout',
  'basscss-utility-typography',
  'basscss-utility-white-space',
  'basscss-utility-responsive-states',
  'basscss-positions',
  'basscss-ui-utility-button-sizes',

  'basscss-grid',
  'flex-object',

  'basscss-color-base',
  'basscss-color-forms',
  'basscss-color-forms-dark',
  'basscss-input-range',
  'basscss-progress',
  'basscss-color-tables',

  'basscss-button-outline',
  'basscss-button-transparent',
  'basscss-background-images',
  'basscss-color-borders',
  'basscss-colors',
];

options.variables = [
  'basscss-defaults'
];

options.dirname = path.join(__dirname, '..');

data = generateData(options);

fs.writeFileSync(path.join(__dirname, './data.json'), JSON.stringify(data));



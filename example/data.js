
var fs = require('fs');
var path = require('path');
var postcss = require('postcss');
var minfo = require('get-module-info');

var data = {};
var modules = [
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


data.modules = modules.map(function(m, i, arr) {
  return minfo(m, { dirname: path.join(__dirname, '..') });
});

data.initialDefaults = {};
var variablesCss = minfo('basscss-defaults', { dirname: path.join(__dirname, '..') }).css;
var variablesRoot = postcss.parse(variablesCss);
variablesRoot.eachDecl(function(decl) {
  var key = decl.prop.replace(/^\-\-/, '');
  data.initialDefaults[key] = decl.value;
});

fs.writeFileSync(path.join(__dirname, './data.json'), JSON.stringify(data));



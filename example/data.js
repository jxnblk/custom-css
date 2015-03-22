
var fs = require('fs');
var path = require('path');
var minfo = require('get-module-info');

var data = {};
var modules = [
  'basscss-grid',
  'flex-object'
];

data.modules = modules.map(function(m, i, arr) {
  return minfo(m, { dirname: path.join(__dirname, '..') });
});

//console.log('data', data);
//console.log(JSON.stringify(data.modules[0].ast, null, 2) );


fs.writeFileSync(path.join(__dirname, './data.json'), JSON.stringify(data));

//module.exports = data;


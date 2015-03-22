
var React = require('react');
var data = require('./data.json');
var CustomCss = React.createFactory(require('..'));

React.render(CustomCss(data), document.querySelector('#app'));


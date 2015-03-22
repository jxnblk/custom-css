
var React = require('react');
var postcss = require('postcss');
  var postcssImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var calc = require('postcss-calc');
var colorFunction = require('postcss-color-function');

var Css = React.createClass({displayName: "Css",

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
      defaults: [],
    }
  },

  compileCss: function() {
    var self = this;
    var css = '';

    this.props.included.forEach(function(active, i) {
      if (active) {
        var module = self.props.modules[i];
        var src = module.css;
        css += src;
      }
    });

    this.props.defaults.forEach(function(m, i) {
      css += m.css;
    });
    
    var result = postcss()
      .use(customMedia())
      .use(customProperties())
      .use(calc())
      .use(colorFunction())
      .process(css).css;
    return result;
  },

  render: function() {
    var css = {
      __html: this.compileCss()
    };
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "css:"), 
        React.createElement("pre", {dangerouslySetInnerHTML: css}), 
        React.createElement("pre", null, "pre")
      )
    )
  }

});

module.exports = Css;

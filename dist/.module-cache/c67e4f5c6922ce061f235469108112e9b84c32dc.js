
var React = require('react');
var postcss = require('postcss');
var cssnext = require('cssnext'); 

var processor = postcss();

var Css = React.createClass({displayName: "Css",

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
    }
  },

  compileCss: function() {
    var self = this;
    var css = '';
    this.props.included.forEach(function(active, i) {
      if (active) {
        var module = self.props.modules[i];
        console.log('active', active, module.name, module.css);
        console.table(module.ast);
        var src = self.props.modules[i].css;
        css += processor.process(src).css;
      }
    });
    console.log(css);
    return css;
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

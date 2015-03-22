
var React = require('react');
var postcss = require('postcss');
var cssnext = require('cssnext'); 

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
        var ast = self.props.modules[i].ast;
        css += postcss().process(ast).use(cssnext()).css;
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

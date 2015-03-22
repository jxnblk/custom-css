
var React = require('react');
var cssnext = require('cssnext'); 

var Css = React.createClass({displayName: "Css",

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
    }
  },

  compileCss: function() {
    var css = '';
    this.props.included.forEach(function(active, i) {
      if (active) {
        css += cssnext(this.props.modules[i]);
      }
    });
    return css;
  },

  render: function() {
    var css = {
      __html: '/* css */'
    };
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "css:"), 
        React.createElement("pre", {dangerouslySetInnerHtml: css})
      )
    )
  }

});

module.exports = Css;

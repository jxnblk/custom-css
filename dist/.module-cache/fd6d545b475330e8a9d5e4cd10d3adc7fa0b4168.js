
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
  },

  render: function() {
    var css = '/* css */';
    return (
      React.createElement("div", null, 
        React.createElement("pre", {dangerouslySetInnerHtml: css})
      )
    )
  }

});

module.exports = Css;

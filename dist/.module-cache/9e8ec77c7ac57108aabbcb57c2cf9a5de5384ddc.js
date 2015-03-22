
var React = require('react');

var ModulesList = React.createClass({displayName: "ModulesList",

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
    }
  },

  renderModule: function(m, i) {
    var isActive = this.props.included[i];
    var ast = JSON.stringify(m.ast, null, 2);
    return (
      React.createElement("li", {key: 'module-'+m.name}, 
        m.name, " [", isActive ? 'active' : 'inactive', "]", 
        React.createElement("pre", null, m.css), 
        React.createElement("pre", null, ast), 
        React.createElement("pre", {dangerouslySetInnerHtml: {__html: m.css}})
      )
    )
  },

  render: function() {
    return (
      React.createElement("ul", null, 
        this.props.modules.map(this.renderModule)
      )
    )
  }

});

module.exports = ModulesList;


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
        React.createElement("input", {type: "checkbox", onChange: this.props.toggleActive}), 
        m.name, " [", isActive ? 'active' : 'inactive', "]", 
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


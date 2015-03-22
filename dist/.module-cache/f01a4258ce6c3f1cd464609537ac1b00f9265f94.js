
var React = require('react');

var ModulesList = React.createClass({displayName: "ModulesList",

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
    }
  },

  renderModule: function(m, i) {
    var isActive = included[i];
    return (
      React.createElement("li", {key: 'module-'+m}, 
        m.name, 
        isActive ? 'active' : 'inactive'
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


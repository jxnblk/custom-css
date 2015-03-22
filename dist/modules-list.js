
var React = require('react');

var ModulesList = React.createClass({displayName: "ModulesList",

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
      toggleActive: function() {},
    }
  },

  renderModule: function(m, i) {
    var self = this;
    var isActive = this.props.included[i];
    var ast = JSON.stringify(m.ast, null, 2);
    var handleChange = function(e) {
      self.props.toggleActive(i);
    };
    return (
      React.createElement("li", {key: 'module-'+m.name}, 
        React.createElement("input", {type: "checkbox", onChange: handleChange}), 
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


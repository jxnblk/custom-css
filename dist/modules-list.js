
var React = require('react');
var classnames = require('classnames');

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
    var active = this.props.included[i];
    var ast = JSON.stringify(m.ast, null, 2);
    var handleChange = function(e) {
      self.props.toggleActive(i);
    };
    return (
      React.createElement("li", {key: 'module-'+m.name}, 
        React.createElement("label", {className: classnames('block', 'flex', 'flex-center', 'flex-wrap', 'border-bottom', { 'bg-aqua': active })}, 
          React.createElement("div", {className: "flex flex-center"}, 
            React.createElement("input", {type: "checkbox", 
              checked: active, 
              onChange: handleChange, 
              className: "m1"}), 
            React.createElement("h3", {className: "h4 flex-auto m0 p1"}, m.name)
          ), 
          React.createElement("div", {className: "h5 flex-auto px1"}, m.description), 
          React.createElement("div", {className: "h5 bold px1"}, "v", m.version)
        )
      )
    )
  },

  render: function() {
    return (
      React.createElement("div", {className: this.props.className + 'overflow-hidden'}, 
        React.createElement("div", {className: "flex flex-baseline mxn1"}, 
          React.createElement("h3", {className: "flex-auto px1"}, "Modules"), 
          React.createElement("div", {className: "px1"}, 
            React.createElement("button", {className: "button button-small button-link", 
              onClick: this.props.selectAll}, 
              "Select All"
            )
          ), 
          React.createElement("div", {className: "px1"}, 
            React.createElement("button", {className: "button button-small button-link", 
              onClick: this.props.selectNone}, 
              "Select None"
            )
          )
        ), 
        React.createElement("ul", {className: "list-reset border-top"}, 
          this.props.modules.map(this.renderModule)
        )
      )
    )
  }

});

module.exports = ModulesList;


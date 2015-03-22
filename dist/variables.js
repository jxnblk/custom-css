
var React = require('react');

var Variables = React.createClass({displayName: "Variables",

  getDefaultProps: function() {
    return {
      defaults: {},
      updateDefaults: function() {},
    }
  },

  renderVariable: function(key) {
    var self = this;
    var value = this.props.defaults[key];
    var defaults = this.props.defaults;
    var handleChange = function(e) {
      var value = e.target.value;
      defaults[key] = value;
      self.props.updateDefaults(defaults);
    };
    return (
      React.createElement("li", {key: 'variable-'+key, 
        className: "sm-col-6 md-col-4 lg-col-3 px2", 
        style: { boxSizing: 'border-box'}}, 
        React.createElement("label", {className: "h5 bold block"}, key), 
        React.createElement("input", {type: "text", 
          ref: key, 
          value: value, 
          onChange: handleChange, 
          className: "full-width field-light"})
      )
    )
  },

  render: function() {
    var defaults = this.props.defaults;
    var keys = Object.keys(defaults);
    return (
      React.createElement("div", {className: this.props.className + ' overflow-hidden'}, 
        React.createElement("h3", {className: ""}, "Custom Properties"), 
        React.createElement("ul", {className: "list-reset sm-flex flex-wrap mxn2"}, 
          keys.map(this.renderVariable)
        )
      )
    )
  }

});

module.exports = Variables;

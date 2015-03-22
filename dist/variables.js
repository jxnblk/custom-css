
var React = require('react');
//var postcss = require('postcss');

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
      React.createElement("li", {key: 'variable-'+key}, 
        React.createElement("label", null, key), 
        React.createElement("input", {type: "text", 
          ref: key, 
          value: value, 
          onChange: handleChange})
      )
    )
  },

  render: function() {
    var defaults = this.props.defaults;
    var keys = Object.keys(defaults);
    return (
      React.createElement("ul", null, 
        keys.map(this.renderVariable)
      )
    )
  }

});

module.exports = Variables;

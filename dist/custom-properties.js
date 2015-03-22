
var React = require('react');
var postcss = require('postcss');

var CustomProperties = React.createClass({displayName: "CustomProperties",

  getDefaultProps: function() {
    return {
      defaults: [],
      updateDefaults: function() {},
    }
  },

  getInitialState: function() {
    return {
      roots: [] 
    }
  },

  componentDidMount: function() {
    var roots = [];
    console.log(this.props.defaults);
    this.props.defaults.forEach(function(d) {
      console.log(d.css);
      var root = postcss.parse(d.css);
      console.log(root);
      roots.push(root);
    });
    this.setState({ roots: roots });
  },

  renderProperty: function(p, i) {
    return (
      React.createElement("li", {key: 'custom-property-'+i}, 
        React.createElement("code", null, p.prop, ": ", p.value)
      )
    )
  },

  renderRoot: function(root, i) {
    var properties = [];
    root.eachDecl(function(d) {
      properties.push({ 
        prop: d.prop,
        value: d.value,
      });
    });
    return (
      React.createElement("ul", {key: 'group-'+i}, 
        properties.map(this.renderProperty)
      )
    )
  },

  render: function() {
    var roots = this.state.roots || [];

    return (
      React.createElement("div", null, 
        roots.map(this.renderRoot)
      )
    )
  }

});

module.exports = CustomProperties;



var React = require('react');
var postcss = require('postcss');

var CustomProperties = React.createClass({

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
      <li key={'custom-property-'+i}>
        <code>{p.prop}: {p.value}</code>
      </li>
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
      <ul key={'group-'+i}>
        {properties.map(this.renderProperty)}
      </ul>
    )
  },

  render: function() {
    var roots = this.state.roots || [];

    return (
      <div>
        {roots.map(this.renderRoot)}
      </div>
    )
  }

});

module.exports = CustomProperties;


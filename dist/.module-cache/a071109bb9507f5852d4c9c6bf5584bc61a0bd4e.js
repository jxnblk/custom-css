
var React = require('react');

var postcss = require('postcss');

var ModulesList = require('./modules-list');

var CustomCss = React.createClass({displayName: "CustomCss",

  getDefaultProps: function() {
    return {
      modules: [],
    }
  },

  getInitialState: function() {
    return {
      included: [],
      compiled: '',
    }
  },

  compile: function() {
  },

  toggleActive: function(i) {
    var included = this.state.included;
    included[i] = !included[i];
    this.setState({ included: included });
  },

  componentDidMount: function() {
    var included = [];
    this.state.modules.forEach(function(m, i) {
      included.push(false);
    });
    this.setState({ included: included });
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(ModulesList, React.__spread({}, 
          this.props, 
          this.state, 
          {toggleActive: this.toggleActive})), 
        "custom-css"
      )
    )
  }

});

module.exports = CustomCss;


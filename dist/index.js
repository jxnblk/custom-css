
var React = require('react');
var postcss = require('postcss');
var ModulesList = require('./modules-list');
var Css = require('./css');
var Variables = require('./variables');

var CustomCss = React.createClass({displayName: "CustomCss",

  getDefaultProps: function() {
    return {
      modules: [],
      initialDefaults: {}
    }
  },

  getInitialState: function() {
    return {
      included: [],
      compiled: '',
      defaults: this.props.initialDefaults,
    }
  },

  toggleActive: function(i) {
    var included = this.state.included;
    included[i] = !included[i];
    this.setState({ included: included });
  },

  selectAll: function() {
    var included = this.state.included.map(function(i) {
      return true;
    });
    this.setState({ included: included });
  },

  selectNone: function() {
    var included = this.state.included.map(function(i) {
      return false;
    });
    this.setState({ included: included });
  },

  updateDefaults: function(defaults) {
    this.setState({ defaults: defaults });
  },

  componentDidMount: function() {
    var included = [];
    this.props.modules.forEach(function(m, i) {
      included.push(false);
    });
    this.setState({
      included: included,
    });
  },

  render: function() {
    return (
      React.createElement("div", {className: ""}, 
        React.createElement("div", {className: ""}, 
          React.createElement(ModulesList, React.__spread({},  this.props,  this.state, 
            {toggleActive: this.toggleActive, 
            selectAll: this.selectAll, 
            selectNone: this.selectNone}))
        ), 
        React.createElement("div", {className: ""}, 
          React.createElement(Variables, React.__spread({},  this.props,  this.state, 
            {updateDefaults: this.updateDefaults}))
        ), 
        React.createElement("div", null, 
          React.createElement(Css, React.__spread({},  this.props,  this.state))
        )
      )
    )
  }

});

module.exports = CustomCss;

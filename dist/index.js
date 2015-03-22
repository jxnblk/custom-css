
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
    var styles = {
      container: {
        display: 'flex'
      },
      left: {
        boxSizing: 'border-box',
        padding: '0 2rem',
        float: 'left',
        width: '30%',
      },
      right: {
        boxSizing: 'border-box',
        padding: '0 2rem',
        float: 'left',
        width: '70%',
      }
    }
    return (
      React.createElement("div", {style: styles.container}, 
        React.createElement("div", null, 
          React.createElement(ModulesList, React.__spread({}, 
            this.props, 
            this.state, 
            {toggleActive: this.toggleActive}))
        ), 
        React.createElement("div", null, 
          React.createElement(Variables, React.__spread({}, 
            this.props, 
            this.state, 
            {updateDefaults: this.updateDefaults}))
        ), 
        React.createElement("div", null, 
          React.createElement(Css, React.__spread({}, 
            this.props, 
            this.state))
        )
      )
    )
  }

});

module.exports = CustomCss;


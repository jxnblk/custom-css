
var React = require('react');

var postcss = require('postcss');

var ModulesList = require('./modules-list');
var Css = require('./css');

var CustomCss = React.createClass({

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
    this.props.modules.forEach(function(m, i) {
      included.push(false);
    });
    this.setState({ included: included });
  },

  render: function() {
    return (
      <div>
        <ModulesList
          {...this.props}
          {...this.state}
          toggleActive={this.toggleActive} />
        <Css {...this.props} {...this.state} />
      </div>
    )
  }

});

module.exports = CustomCss;


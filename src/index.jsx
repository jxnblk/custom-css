
var React = require('react');
var postcss = require('postcss');
var ModulesList = require('./modules-list');
var Css = require('./css');
var Variables = require('./variables');

var CustomCss = React.createClass({

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
      <div>
        <ModulesList {...this.props} {...this.state}
          className="mb3"
          toggleActive={this.toggleActive}
          selectAll={this.selectAll}
          selectNone={this.selectNone} />
        <Variables {...this.props} {...this.state}
          className="mb3"
          updateDefaults={this.updateDefaults} />
        <Css {...this.props} {...this.state} />
      </div>
    )
  }

});

module.exports = CustomCss;


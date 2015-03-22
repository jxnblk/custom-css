
var React = require('react');

var postcss = require('postcss');

var ModulesList = require('./modules-list');
var Css = require('./css');
var CustomProperties = require('./custom-properties');

var CustomCss = React.createClass({

  getDefaultProps: function() {
    return {
      modules: [],
      defaults: [],
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
      <div style={styles.container}>
        <div>
          <ModulesList
            {...this.props}
            {...this.state}
            toggleActive={this.toggleActive} />
        </div>
        <div>
          <CustomProperties
            {...this.props}
            />
        </div>
        <div>
          <Css
            {...this.props}
            {...this.state} />
        </div>
      </div>
    )
  }

});

module.exports = CustomCss;


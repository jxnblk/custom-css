
var React = require('react');
//var postcss = require('postcss');

var Variables = React.createClass({

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
      <li key={'variable-'+key}>
        <label>{key}</label>
        <input type="text"
          ref={key}
          value={value}
          onChange={handleChange} />
      </li>
    )
  },

  render: function() {
    var defaults = this.props.defaults;
    var keys = Object.keys(defaults);
    return (
      <ul>
        {keys.map(this.renderVariable)}
      </ul>
    )
  }

});

module.exports = Variables;

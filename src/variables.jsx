
var React = require('react');

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
      <li key={'variable-'+key}
        className="sm-col-6 md-col-4 lg-col-3 px2"
        style={{ boxSizing: 'border-box' }}>
        <label className="h5 bold block">{key}</label>
        <input type="text"
          ref={key}
          value={value}
          onChange={handleChange}
          className="full-width field-light" />
      </li>
    )
  },

  render: function() {
    var defaults = this.props.defaults;
    var keys = Object.keys(defaults);
    return (
      <div className={this.props.className + ' overflow-hidden'}>
        <h3 className="">Custom Properties</h3>
        <ul className="list-reset sm-flex flex-wrap mxn2">
          {keys.map(this.renderVariable)}
        </ul>
      </div>
    )
  }

});

module.exports = Variables;

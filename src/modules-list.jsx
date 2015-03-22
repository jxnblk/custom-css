
var React = require('react');

var ModulesList = React.createClass({

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
      toggleActive: function() {},
    }
  },

  renderModule: function(m, i) {
    var self = this;
    var isActive = this.props.included[i];
    var ast = JSON.stringify(m.ast, null, 2);
    var handleChange = function(e) {
      self.props.toggleActive(i);
    };
    return (
      <li key={'module-'+m.name}>
        <label className="block">
          <input type="checkbox" onChange={handleChange} />
          <h3>{m.name}</h3>
        </label>
      </li>
    )
  },

  render: function() {
    return (
      <ul>
        {this.props.modules.map(this.renderModule)}
      </ul>
    )
  }

});

module.exports = ModulesList;


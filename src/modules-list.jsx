
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
        <input type="checkbox" onChange={handleChange} />
        {m.name} [{isActive ? 'active' : 'inactive'}]
        <pre dangerouslySetInnerHtml={{__html: m.css}} />
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


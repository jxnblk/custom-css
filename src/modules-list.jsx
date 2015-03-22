
var React = require('react');
var classnames = require('classnames');

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
    var active = this.props.included[i];
    var ast = JSON.stringify(m.ast, null, 2);
    var handleChange = function(e) {
      self.props.toggleActive(i);
    };
    return (
      <li key={'module-'+m.name}>
        <label className={classnames('block', 'flex', 'flex-center', 'flex-wrap', 'border-bottom', { 'bg-aqua': active })}>
          <div className="flex flex-center">
            <input type="checkbox"
              checked={active}
              onChange={handleChange}
              className="m1" />
            <h3 className="h4 flex-auto m0 p1">{m.name}</h3>
          </div>
          <div className="h5 flex-auto px1">{m.description}</div>
          <div className="h5 bold px1">v{m.version}</div>
        </label>
      </li>
    )
  },

  render: function() {
    return (
      <div className={this.props.className + 'overflow-hidden'}>
        <div className="flex flex-baseline mxn1">
          <h3 className="flex-auto px1">Modules</h3>
          <div className="px1">
            <button className="button button-small button-link"
              onClick={this.props.selectAll}>
              Select All
            </button>
          </div>
          <div className="px1">
            <button className="button button-small button-link"
              onClick={this.props.selectNone}>
              Select None
            </button>
          </div>
        </div>
        <ul className="list-reset border-top">
          {this.props.modules.map(this.renderModule)}
        </ul>
      </div>
    )
  }

});

module.exports = ModulesList;


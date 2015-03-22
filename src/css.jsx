
var React = require('react');
var postcss = require('postcss');
  var postcssImport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var calc = require('postcss-calc');
var colorFunction = require('postcss-color-function');

var Css = React.createClass({

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
      defaults: {},
    }
  },

  compileCss: function(defaults) {
    var self = this;
    var css = '';
    //var defaults = this.props.defaults;

    this.props.included.forEach(function(active, i) {
      if (active) {
        var module = self.props.modules[i];
        var src = module.css;
        css += src;
      }
    });
    
    var result = postcss()
      .use(customMedia())
      .use(customProperties({ variables: defaults }))
      .use(calc())
      .use(colorFunction())
      .process(css).css;
    return result;
  },

  render: function() {
    var css = {
      __html: this.compileCss(this.props.defaults)
    };
    return (
      <div>
        <h1>css:</h1>
        <pre dangerouslySetInnerHTML={css} />
        <pre>pre</pre>
      </div>
    )
  }

});

module.exports = Css;

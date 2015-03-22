
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
    var blob = new Blob([result], { type: 'text/plain' });
    var url = (window.URL || window.webkitURL).createObjectURL( blob );
    return { css: result, blob: blob, download: url };
    //return result;
  },


  render: function() {
    var obj = this.compileCss(this.props.defaults);
    var code = { __html: obj.css };
    var fileSize = obj.blob.size;
    var download = obj.download;
    return (
      <div>
        <h1>css:</h1>
        <code>size: {fileSize}</code>
        <a href={download} download="basscss-custom.css">Download</a>
        <pre dangerouslySetInnerHTML={code} />
      </div>
    )
  }

});

module.exports = Css;

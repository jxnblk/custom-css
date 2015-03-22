
var React = require('react');
var postcss = require('postcss');
var customProperties = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var calc = require('postcss-calc');
var colorFunction = require('postcss-color-function');
var humanize = require('humanize-plus');

var Css = React.createClass({displayName: "Css",

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
  },


  render: function() {
    var obj = this.compileCss(this.props.defaults);
    var code = { __html: obj.css };
    var fileSize = humanize.fileSize(obj.blob.size);
    var download = obj.download;
    var preStyle = {
      maxHeight: '40vh'
    };
    return (
      React.createElement("div", {className: "overflow-hidden"}, 
        React.createElement("div", {className: "flex flex-center flex-wrap mb2 mxn1"}, 
          React.createElement("h3", {className: "m0 px1 flex-auto"}, "Compiled CSS"), 
          React.createElement("div", {className: "h5 bold px1"}, fileSize), 
          React.createElement("a", {href: download, 
            className: "button ml1 mr1", 
            download: "basscss-custom.css"}, 
            "Download"
          )
        ), 
        React.createElement("pre", {dangerouslySetInnerHTML: code, style: preStyle}), 
        React.createElement("a", {href: download, 
          className: "button", 
          download: "basscss-custom.css"}, 
          "Download"
        )
      )
    )
  }

});

module.exports = Css;

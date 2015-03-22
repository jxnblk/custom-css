
var React = require('react');
var postcss = require('postcss');
var cssnext = require('cssnext'); 

var processor = postcss();

var Css = React.createClass({

  getDefaultProps: function() {
    return {
      modules: [],
      included: [],
    }
  },

  compileCss: function() {
    var self = this;
    var css = '';
    this.props.included.forEach(function(active, i) {
      if (active) {
        var module = self.props.modules[i];
        console.log('active', active, module.name, module.css);
        console.table(module.ast);
        var src = self.props.modules[i].css;
        css += processor.process(src).css;
        //css += cssnext(src);
      }
    });
    console.log(css);
    return css;
  },

  render: function() {
    var css = {
      __html: this.compileCss()
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

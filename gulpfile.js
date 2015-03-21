
var fs = require('fs');
var glob = require('glob');
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var uncss = require('gulp-uncss');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    //.pipe(uncss({
    //  html: glob.sync('./src/templates/**/*.html'),
    //  ignore: ['.bg-light-blue']
    //}))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  gulp.src('./src/js/app.js')
    .pipe(browserify({
      transform: ['brfs'],
      standalone: 'customCss'
    }))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./js'))
    .pipe(uglify({
      mangle: false
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('data', function() {
  var cssdata = require('./tasks/data');
  var p = require('./package.json');
  var modules = cssdata(p.css.modules);
  fs.writeFileSync('modules.json', JSON.stringify(modules, null, 2));
  var optionals = cssdata(p.css.optionalModules);
  fs.writeFileSync('optional-modules.json', JSON.stringify(optionals, null, 2));
  var variables = cssdata(p.css.variables);
  fs.writeFileSync('variables.json', JSON.stringify(variables, null, 2));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['css', 'js', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['css', 'js']);
});


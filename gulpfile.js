
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
    .pipe(uncss({
      html: glob.sync('./src/templates/**/*.html'),
      ignore: ['.bg-light-blue']
    }))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  gulp.src('./src/js/app.js')
    .pipe(browserify({
      transform: ['brfs']
    }))
    .pipe(ngAnnotate())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('data', function() {
  var modules = require('./tasks/data')();
  fs.writeFileSync('data.json', JSON.stringify(modules, null, 2));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['css', 'js', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['css', 'js']);
});


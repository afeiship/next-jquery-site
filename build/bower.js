(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('bower', function() {
    return gulp.src('bower_components/**')
      .pipe(gulp.dest('dist/bower_components'));
  });



}());

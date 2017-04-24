(function () {

  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  var browserSync = require('browser-sync');
  // Static server
  gulp.task('serve', ['watch'], function () {
    browserSync.init({
      server: {
        baseDir: path.join(config.path.dist),
        routes: {
          '/bower_components': path.join(config.path.root, 'bower_components'),
        }
      }
    });


    gulp.watch(['src/**']).on("change", function () {
      browserSync.reload();
    });
  });


}());

"use strict";

var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat');

gulp.task('connect', function() {
  connect.server({
    root: '../Ciklum/',
    livereload: true
  });
});

gulp.task('stylus', function () {
  return gulp.src(['stylus/reset.styl',
                   'stylus/Microsoft-nav.styl',
                   'stylus/Dropbox.styl',
                   'stylus/Invision.styl',
                   'stylus/Oculus.styl',
                   'stylus/Apple.styl'
  ])
  	.pipe(concat('main.styl'))
  	.pipe(stylus('main.css'))
    .pipe(gulp.dest('../Ciklum/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('../Ciklum/index.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  return gulp.src(['scripts/microsoft.js',
  				   ])
  	.pipe(concat('main.js'))
  	.pipe(gulp.dest('../Ciklum/'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('stylus/*.styl', ['stylus']);
	gulp.watch('../Ciklum/index.html', ['html']);
	gulp.watch('scripts/*.js', ['js']);
})

// default
gulp.task('default', ['html','stylus','js','watch','connect']);
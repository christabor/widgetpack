'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('widgetpack.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass']);

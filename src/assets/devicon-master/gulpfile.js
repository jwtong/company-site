const gulp = require('gulp')
const minifyCSS = require('gulp-minify-css')
const concatCss = require('gulp-concat-css')
const plumber = require('gulp-plumber')

gulp.task('concat-css', function () {
  gulp
    .src(['./devicon.css', './devicon-colors.css'])
    .pipe(plumber())
    .pipe(concatCss('./devicon.min.css'))
    .pipe(gulp.dest('./'))
})

gulp.task('minify-css', function () {
  gulp
    .src('./devicon.min.css')
    .pipe(plumber())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./'))
})

const gulp = require('gulp');
const concatCSS = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('minify-index', function () {
   return gulp.src('unminified/index/**/*.css')
       .pipe(concatCSS('index.css'))
       .pipe(cleanCSS())
       .pipe(rename('index.css'))
       .pipe(gulp.dest('public/styles/'));
});

gulp.task('minify-about', function () {
   return gulp.src('unminified/about/**/*.css')
       .pipe(concatCSS('about.css'))
       .pipe(cleanCSS())
       .pipe(rename('about.css'))
       .pipe(gulp.dest('public/styles/'));
});

gulp.task('default', function () {
   return gulp.watch('unminified/**/*.css', gulp.series('minify-index', 'minify-about'))
});

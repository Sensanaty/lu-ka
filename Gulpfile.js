const gulp = require('gulp');
const concatCSS = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

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

gulp.task('minify-projects', function () {
   return gulp.src('unminified/projects/**/*.css')
      .pipe(concatCSS('projects.css'))
      .pipe(cleanCSS())
      .pipe(rename('projects.css'))
      .pipe(gulp.dest('public/styles/'));
});

gulp.task('minify-ramblings', function () {
   return gulp.src('unminified/ramblings/**/*.css')
      .pipe(concatCSS('ramblings.css'))
      .pipe(cleanCSS())
      .pipe(rename('ramblings.css'))
      .pipe(gulp.dest('public/styles/'));
});

gulp.task('minify-contact', function () {
   return gulp.src('unminified/contact/**/*.css')
      .pipe(concatCSS('contact.css'))
      .pipe(cleanCSS())
      .pipe(rename('contact.css'))
      .pipe(gulp.dest('public/styles/'));
});

gulp.task('minify-index-js', function () {
   return gulp.src('unminified/scripts/**/*.js')
      .pipe(concat('index.js'))
      .pipe(babel({
         presets: ["@babel/preset-env"]
      }))
      .pipe(uglify())
      .pipe(rename('index.js'))
      .pipe(gulp.dest('public/scripts/'));
});

gulp.task('build', gulp.series('minify-index', 'minify-about', 'minify-contact', 'minify-ramblings', 'minify-projects', 'minify-index-js'));

function watch() {
   gulp.watch('unminified/about/**/*.css', gulp.series('minify-about'));
   gulp.watch('unminified/contact/**/*.css', gulp.series('minify-contact'));
   gulp.watch('unminified/index/**/*.css', gulp.series('minify-index'));
   gulp.watch('unminified/projects/**/*.css', gulp.series('minify-projects'));
   gulp.watch('unminified/ramblings/**/*.css', gulp.series('minify-ramblings'));
   gulp.watch('unminified/**/*.js', gulp.series('minify-index-js'));
}

gulp.task('default', watch);
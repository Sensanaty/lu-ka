var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('C:/Users/sensa/Documents/lu-ka/unminified/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('C:/Users/sensa/Documents/lu-ka/public/styles'));
});

gulp.task('default', function() {
    gulp.watch('C:/Users/sensa/Documents/lu-ka/unminified/*.css', ['minify-css']);
});
const gulp = require('gulp');

gulp.task('default', () => {
  // console.log('default task');
  gulp.src(['src/**/*'])
    .pipe(gulp.dest('build'))
})

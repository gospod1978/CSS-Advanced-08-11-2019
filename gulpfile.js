var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('first-site-koko/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('first-site-koko/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sync', function() {
 browserSync.init({
     server: {
         baseDir: "./_layouts/main.html"
     }
  });
});

gulp.task('watch', function(){
  gulp.watch('first-site-koko/scss/**/*.scss', gulp.series(['sass']));
  gulp.watch('*.html').on('change', reload);
});




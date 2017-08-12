'user strict';

var gulp = require('gulp'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
maps = require('gulp-sourcemaps'),
del = require('del'),
sass = require('gulp-sass');

gulp.task('concatScripts', () => {
  return gulp.src(['lib/js/jquery.js', 'lib/js/custom.js'])
  .pipe(maps.init())
  .pipe(concat('main.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('lib/js'));
});

gulp.task('minifyJs', ['concatScripts'], () => {
  return gulp.src('lib/js/main.js')
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest('lib/js'));
});

gulp.task('compileSass', () => {
  return gulp.src('scss/main.scss')
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(gulp.dest('lib/stylesheets'));
});

gulp.task('watchFiles', () => {
  gulp.watch(['scss/**/*.scss', 'scss/*.scss'], ['compileSass']);
  gulp.watch(['lib/js/*.js'], ['concatScripts']);
});

gulp.task('build', ['minifyJs', 'compileSass'], () => {
  return gulp.src(['lib/js/main.min.js', 'lib/stylesheets/main.css', 'images/**', 'fonts/**'], {base: './'})
  .pipe(gulp.dest('public'));
});

gulp.task('clean', () => {
  del(['public/', 'lib/js/main**.js*','lib/stylesheets/main*.css*']);
});

gulp.task('serve', () => {
  gulp.start('watchFiles');
})
gulp.task('default', ['clean'], () => {
  gulp.start('build');
  console.log('Archivos CSS y JS listos');
});

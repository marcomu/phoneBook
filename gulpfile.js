'user strict';

const gulp = require('gulp'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
maps = require('gulp-sourcemaps'),
del = require('del'),
runSequence = require('run-sequence'),
sass = require('gulp-sass');

gulp.task('concatScripts', () => {
  return gulp.src(['source/js/custom.js'])
  .pipe(maps.init())
  .pipe(concat('main.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('source/js'));
});

gulp.task('minifyJs', ['concatScripts'], () => {
  return gulp.src('source/js/main.js')
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest('source/js'));
});

gulp.task('compileSass', () => {
  return gulp.src(['source/scss/main.scss', 'source/scss/overrides.scss'])
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(gulp.dest('source/stylesheets'));
});

gulp.task('serve', () => {
  gulp.watch(['source/scss/main.scss'], ['build']);
  gulp.watch(['source/js/main.js'], ['build']);
});

gulp.task('build', ['minifyJs', 'compileSass'], () => {
  gulp.start('setPublic');
});

gulp.task('setPublic', () => {
  return gulp.src(['source/js/main.min.js', 'source/stylesheets/main.css', 'source/stylesheets/overrides.css'], {base: './'})
  .pipe(gulp.dest('public'));
})

// Clean
gulp.task('clean', function() {
    console.log('uploads folder deleted')
    return del(['uploads/'])
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

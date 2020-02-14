const gulp            = require('gulp');
const sass            = require('gulp-sass');
const browserSync     = require('browser-sync').create();
const postcss         = require('gulp-postcss');
const autoprefixer    = require('autoprefixer');
const cssnano         = require('cssnano');

const plugins = [
    autoprefixer(),
    // cssnano()
];

function style() {
  return gulp.src('./scss/**/*.scss')
  .pipe(sass({
    includePaths: ['node_modules/bootstrap/scss/']
  }).on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
  }

function watch() {
  browserSync.init({
    proxy: "bootimber.local",
    browser: "firefox"
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./templates/**/*.twig').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;

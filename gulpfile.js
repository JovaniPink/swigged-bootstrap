// Load dependencies
var gulp = require('gulp');
var babel = require("gulp-babel");
var sass = require('gulp-sass');
var browsersync = require('browser-sync').create();
var cached = require('gulp-cached');
var cleancss = require('gulp-clean-css');
var del = require('del');
var fileinclude = require('gulp-file-include');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var npmdist = require('gulp-npm-dist');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

// Load config
var config = require('./config');

// Define paths
var paths = {
  base: {
    base: {
      dir: './',
    },
    node: {
      dir: './node_modules',
    },
  },
  dist: {
    base: {
      dir: './dist',
    },
    libs: {
      dir: './dist/assets/libs',
    },
  },
  src: {
    base: {
      dir: './src',
      files: './src/**/*',
    },
    css: {
      dir: './src/assets/css',
      files: './src/assets/css/**/*',
    },
    html: {
      dir: './src',
      files: './src/**/*.html',
    },
    img: {
      dir: './src/assets/img',
      files: './src/assets/img/**/*',
    },
    js: {
      dir: './src/assets/js',
      files: './src/assets/js/**/*',
    },
    partials: {
      dir: './src/partials',
      files: './src/partials/**/*',
    },
    scss: {
      dir: './src/assets/scss',
      files: './src/assets/scss/**/*',
      main: './src/assets/scss/*.scss',
    },
    tmp: {
      dir: './src/.tmp',
      files: './src/.tmp/**/*',
    },
  },
};

//
// Tasks ===================================
//

gulp.task('browsersync', function(callback) {
  browsersync.init({
    server: {
      baseDir: [paths.src.tmp.dir, paths.src.base.dir, paths.base.base.dir],
    },
  });
  callback();
});

gulp.task('browsersyncReload', function(callback) {
  browsersync.reload();
  callback();
});

gulp.task('watch', function() {
  gulp.watch(paths.src.scss.files, gulp.series('scss'));
  gulp.watch(
    [paths.src.js.files, paths.src.img.files],
    gulp.series('browsersyncReload')
  );
  gulp.watch(
    [paths.src.html.files, paths.src.partials.files],
    gulp.series('fileinclude', 'browsersyncReload')
  );
});

gulp.task('scss', function() {
  return gulp
    .src(paths.src.scss.main)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.src.css.dir))
    .pipe(browsersync.stream());
});

gulp.task('fileinclude', function(callback) {
  return gulp
    .src([
      paths.src.html.files,
      '!' + paths.src.tmp.files,
      '!' + paths.src.partials.files,
    ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent: true,
        context: config,
      })
    )
    .pipe(cached())
    .pipe(gulp.dest(paths.src.tmp.dir));
});

gulp.task('clean:tmp', function(callback) {
  del.sync(paths.src.tmp.dir);
  callback();
});

// gulp.task('clean:packageLock', function(callback) {
//   del.sync(paths.base.packageLock.files);
//   callback();
// });

gulp.task('clean:dist', function(callback) {
  del.sync(paths.dist.base.dir);
  callback();
});

gulp.task('copy:all', function() {
  return gulp
    .src([
      paths.src.base.files,
      '!' + paths.src.partials.dir,
      '!' + paths.src.partials.files,
      '!' + paths.src.scss.dir,
      '!' + paths.src.scss.files,
      '!' + paths.src.tmp.dir,
      '!' + paths.src.tmp.files,
      '!' + paths.src.js.dir,
      '!' + paths.src.js.files,
      '!' + paths.src.css.dir,
      '!' + paths.src.css.files,
      '!' + paths.src.html.files,
    ])
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task('copy:libs', function() {
  return gulp
    .src(npmdist(), {
      base: paths.base.node.dir,
    })
    .pipe(gulp.dest(paths.dist.libs.dir));
});

gulp.task('html', function() {
  return gulp
    .src([
      paths.src.html.files,
      '!' + paths.src.tmp.files,
      '!' + paths.src.partials.files,
    ])
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent: true,
        context: config,
      })
    )
    .pipe(replace(/href="(.{0,10})node_modules/g, 'href="$1assets/libs'))
    .pipe(replace(/src="(.{0,10})node_modules/g, 'src="$1assets/libs'))
    .pipe(useref())
    .pipe(cached())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cleancss()))
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task(
  'build',
  gulp.series(
    gulp.parallel('clean:tmp', 'clean:dist', 'copy:all', 'copy:libs'),
    'scss',
    'html'
  )
);

gulp.task(
  'default',
  gulp.series(
    gulp.parallel('fileinclude', 'scss'),
    gulp.parallel('browsersync', 'watch')
  )
);

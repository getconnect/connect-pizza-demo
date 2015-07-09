var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var cssify = require('cssify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var cssNext = require('gulp-cssnext');
var concat = require('gulp-concat');

var errorsFatal = false;

function handleError(error) {
    console.log(error.stack);
    if(errorsFatal) {
        throw error;
    }
}

gulp.task('css', function() {
  return gulp.src(["./node_modules/connect-js-viz/node_modules/connect-js-c3/c3.css", "./node_modules/connect-js-viz/css/connect-viz.css", "./src/css/base.css"])
    .pipe(cssNext({
        compress: true
    }))
    .pipe(concat('base.css'))
    .pipe(gulp.dest("./dist/css"))
    .on('error', handleError);
});

gulp.task('js', function () {
	return browserify({
		entries: './src/index.jsx',
		extensions: ['.jsx'],
		debug: true
	})
	.transform([babelify, cssify])
	.bundle()
	.pipe(source('index.js'))
	.pipe(gulp.dest('./dist'))
    .on('error', handleError);
});

gulp.task('images', function () {
    return gulp.src('src/**/*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function() {
	return gulp.src('src/index.html')
    	.pipe(gulp.dest('./dist'));
});

gulp.task('dist', ['css', 'js', 'html', 'images']);


gulp.task('reload-dist', ['dist'], browserSync.reload);
gulp.task('serve', ['dist'], function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch('./src/**/*.*', ['reload-dist']);
});

gulp.task('default', ['serve']);
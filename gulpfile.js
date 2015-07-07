var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var cssNext = require('gulp-cssnext');

var errorsFatal = false;

function handleError(error) {
    console.log(error.stack);
    if(errorsFatal) {
        throw error;
    }
}

gulp.task('css', function() {
  return gulp.src("./src/css/base.css")
    .pipe(cssNext({
        compress: true
    }))
    .pipe(gulp.dest("./dist/css"))
    .on('error', handleError);
});

gulp.task('js', function () {
	return browserify({
		entries: './src/index.jsx',
		extensions: ['.jsx'],
		debug: true
	})
	.transform(babelify)
	.bundle()
	.pipe(source('index.js'))
	.pipe(gulp.dest('./dist'));
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
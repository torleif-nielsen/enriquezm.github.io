// Include gulp
var gulp = require('gulp');

// Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var options = ['-o2'];


/**
 *	TASK: scripts
 *	USES: gulp-concat, gulp-rename, gulp-uglify
 *  DESCRIPTION: Concats all js files, compresses, and renames with .min
 */
gulp.task('scripts', function(){
	return gulp.src([
		'development/src/js/jquery.min.js',
		'development/src/js/bootstrap.min.js',
		'development/src/js/main.js'
		])
		.pipe(concat('all.js'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify())
		.pipe(gulp.dest('production/js/'));
});


/**
 *	TASK: scss
 *	USES: gulp-concat, gulp-sass, gulp-rename
 *  DESCRIPTION: Concats all scss files, compresses, and renames with .min
 */
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'compressed'
};
gulp.task('scss', function() {
	return gulp.src([
		'development/src/sass/partials/variables.scss',
		'development/src/sass/partials/typography.scss',
		'development/src/sass/partials/mixins.scss',
		'development/src/sass/partials/bootstrap-overrides.scss',
		'development/src/sass/partials/media-queries.scss',
		'development/src/sass/partials/custom-styling.scss'
		])
		.pipe(concat('all.scss'))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(gulp.dest('production/css'))
});

/**
 *	TASK: watch
 *	USES: gulp-watch
 *  DESCRIPTION: Runs tasks when a script or stylesheet as been modified.
 */
gulp.task('watch', function() {
	gulp.watch('development/src/sass/partials/**/*.scss', ['scss']);
	gulp.watch('development/src/js/**/*.js', ['scripts']);
});

// Default task
gulp.task('default', ['scripts', 'sass']);

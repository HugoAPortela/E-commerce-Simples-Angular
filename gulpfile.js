var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var runSequence = require('run-sequence');

gulp.task('clean', function(){
	return gulp.src('dist/')
	.pipe(clean());
});

gulp.task('jshint', function(){
	return gulp.src('app/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('uglify', function(){
	return gulp.src(['app/**/*.js'])
	.pipe(uglify())
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function(){
	return gulp.src('*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('cleanCss', function(){
	return gulp.src('css/*.css')
	.pipe(cleanCss())
	.pipe(concat('all.min.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function(){
	return gulp.src('img/*')
	.pipe(gulp.dest('dist/img'));
});

gulp.task('default', function(callback){
	return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cleanCss', 'copy'], callback);
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*.js', './*.html'], ['default']);
});
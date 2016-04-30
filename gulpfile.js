var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');

gulp.task('build', function(){
	return browserify({ entries: './app.ts', extensions: [ '.ts' ], debug: true, transform: [reactify] })
		.plugin(tsify, {target: 'es6'})
		.bundle()
		.pipe(source('bundles.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', [ 'build' ], function(){
	gulp.watch('*.ts', ['build'])
});
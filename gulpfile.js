var gulp = require('gulp');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');
 

gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
//	instalujemy zmienne cssbeautify ze strony npmjs.com co ma za zzadanie ulozenie wszystkiego
	    .pipe(cssbeautify())
		.pipe(gulp.dest('app/css'));
	   
});

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('hello', function() {
	console.log('czesc');
})
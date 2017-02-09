var gulp = require("gulp");
	image = require("gulp-image");
	sass = require("gulp-sass");
// --- Task for images
gulp.task( "images", function(){
	gulp.src("src/images/**")
		.pipe( image())
		.pipe(gulp.dest('assets/images'));
})
// --- Task for styles
gulp.task( "css", function(){
	gulp.src( "src/sass/**/*.scss")
	.pipe( sass().on( "error", sass.logError))
	.pipe( gulp.dest( "assets/css",))
})
// --- Task for pug

// --- Task for js

// --- Watch tasks

// --- Aliases



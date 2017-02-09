var gulp = require("gulp");
// --- Task for images
gulp.task( "images", function(){
	gulp.src("src/images/**")
		.pipe( image())
		.pipe(gulp.assets('./assets'));
})
// --- Task for styles

// --- Task for pug

// --- Task for js

// --- Watch tasks

// --- Aliases



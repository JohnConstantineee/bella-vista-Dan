const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task("concatCss", function(){
    return gulp.src("src/css/*.css").
    pipe(concat("all.css")).
    pipe(gulp.dest("dist/css"));
});

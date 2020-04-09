var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');
gulp.task("sass", function() {
    return gulp.src("scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on("error", sass.logError))
        .pipe(gulp.dest("./css/"))
});

gulp.task("watch", function(){
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass", "watch"));
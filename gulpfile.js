const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function minImg() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imgMin'))
}


exports.default = gulp.parallel(styles, minImg);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
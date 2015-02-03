var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var livereload = require('gulp-livereload');
var clean = require('gulp-clean');
var coffee = require('gulp-coffee');

var paths = {
    hbsdecks: 'decks/**/*.hbs',
    dist: 'dist',
    sass: 'style/*.scss'

};


gulp.task('copy', function () {
    gulp.src(paths.decks)
        .pipe(gulp.dest(paths.decksdist + '/content'));

});

require('gulp-grunt')(gulp);

gulp.task('assemble', ['grunt-assemble:decks'], function () {
    // too much, but causes refresh of current page in browser
    livereload.changed(paths.decksdist);
});

gulp.task('sass', function () {
    var opts = {comments: true, spare: true};
    gulp.src(paths.sass)
        .pipe(sass({errLogToConsole: true}))
        .pipe(minifyCSS(opts))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist + '/css/'))
        .pipe(livereload());
});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['layouts/deck.hbs',paths.hbsdecks], ['assemble']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('clean', function () {
     gulp.src(paths.dist, {read: false})
        .pipe(clean());
});

gulp.task('build', ['sass','assemble']);
gulp.task('dev',['build','watch']);
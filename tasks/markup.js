var gulp = require('gulp');
var browser = require('browser-sync');

var config = require('./config').markup;
var notifyErrors = require('./notify-errors');

gulp.task('markup', function() {
    return gulp
        .src(config.src)
        .on('error', notifyErrors)
        .pipe(gulp.dest(config.dest))
        .pipe(browser.reload({stream: true}));
});

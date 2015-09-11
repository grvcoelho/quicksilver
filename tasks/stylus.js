var gulp       = require('gulp');
var browser    = require('browser-sync');
var stylus     = require('gulp-stylus')
var sourcemaps = require('gulp-sourcemaps');
var jeet       = require('jeet');
var kouto      = require('kouto-swiss');
var rupture    = require('rupture');

var config = require('./config').stylus;
var notifyErrors = require('./notify-errors');

gulp.task('stylus', function() {
    return gulp
        .src(config.src)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [kouto(), jeet(), rupture()]
        }))
        .on('error', notifyErrors)
        .pipe(sourcemaps.write())
        .pipe(browser.reload({stream: true}))
        .pipe(gulp.dest(config.dest));
});

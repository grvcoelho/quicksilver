var gulp = require('gulp');
var browser = require('browser-sync');

var config = require('./config').server;

gulp.task('server', ['stylus:watch'], function() {
    browser({
        server: {
            baseDir: config.baseDir,
        },
        port: 3000
    });
});

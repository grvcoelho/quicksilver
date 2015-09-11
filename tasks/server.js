var gulp    = require('gulp');
var browser = require('browser-sync');

var config = require('./config').server;

gulp.task('server', function() {
    browser({
        server: {
            baseDir: config.baseDir,
        },
        port: 3000
    });
});

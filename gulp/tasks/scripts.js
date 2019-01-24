/* Create a task that runs npm */

var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if (err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback(); // run callback to ensure that webpack has finished running?
    });
});
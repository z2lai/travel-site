var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    /* Setting up internal web server to serve our website located in app folder. The result
    is the website gets opened in the browser with an internal URL.
    1) BrowserSync enables page refresh or CSS injection into the page with tasks.
    2) BrowserSync enables crossbrowser testing by duplicating actions performed on the website in one
       browser across all other opened browsers that have the website loaded.
    3) BrowserSync enables testing on mobile devices by creating a URL that can be accessed externally 
      through your network. This external URL will be displayed in the command line beside "External:",
      which you can type into your mobile device to access. */
    browserSync.init({
      notify: false, // hides css injection notification in top right corner
      server: {
        baseDir: "app"
      }
    });
  
    gulp.watch('app/index.html', function() {
      browserSync.reload();
    });
  
    gulp.watch('app/assets/styles/**/*.css', function() {       
      gulp.start('cssInject');
    });

    gulp.watch('app/assets/scripts/**/*.js', function() {
      gulp.start('scriptsRefresh')
    })
  });
  
  /* Create task to inject CSS into the webpage without resetting state of the browser. 'styles' is 
  passed as the dependency task which means it has to be completed before 'cssInject' is started */
  gulp.task('cssInject', ['styles'], function() {
    return gulp.src('app/temp/styles/styles.css')
      .pipe(browserSync.stream());
  });

  /* Create a task that refreshes the browser after the scripts task is finished running webpack*/
  gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
  });
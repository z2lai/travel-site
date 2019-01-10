var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        // create an image sprite from the svg files above and
        // create a CSS file using a CSS template referenced in "config"
        // which can be used to insert each individual icon from the image sprite
        // into the webpage
        .pipe(svgSprite(config)) 
        .pipe(gulp.dest('./app/temp/sprite/'));
});

// Copy the sprite file into app/assets/images to keep image organization consistent
gulp.task('copySpriteGraphic', ['createSprite'], function() {
    return gulp.src('.app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('.app/assets/images/sprites'));
});
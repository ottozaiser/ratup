//initialize all of our variables
var src, base, concat, directory, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, cleanCSS, del, browserSync, autoprefixer, gulpSequence, shell, sourceMaps, plumber, newer, cache;

var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];
//Path to the theme root
var _dist = "./dist";
//Path to the theme src
var _app = "./app";


//load all of our dependencies
//add more here if you want to include more libraries
gulp            = require('gulp');
concat          = require('gulp-concat');
uglify          = require('gulp-uglify');
sass            = require('gulp-sass');
del             = require('del');
cache           = require('gulp-cached');
sourceMaps      = require('gulp-sourcemaps');
imagemin        = require('gulp-imagemin');
cleanCSS        = require('gulp-clean-css');
browserSync     = require('browser-sync');
autoprefixer    = require('gulp-autoprefixer');
gulpSequence    = require('gulp-sequence').use(gulp);
shell           = require('gulp-shell');
plumber         = require('gulp-plumber');
newer           = require('gulp-newer');

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: _dist
        },
        options: {
            reloadDelay: 250
        },
        notify: false
    });
});


//compressing images & handle SVG files
gulp.task('images', function(tmp) {
    gulp.src([_app+'/images/*.jpg', _app+'/images/*.png'])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(gulp.dest(_dist+'/images'));
});

//compressing images & handle SVG files
gulp.task('images-deploy', function() {
    gulp.src([_app+'/images/**/*', '!'+_app+'/images/README'])
        //prevent pipe breaking caused by errors from gulp plugins
        .pipe(plumber())
        .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
        .pipe(gulp.dest(_dist+'/images'));
});

//compiling our Javascripts
gulp.task('scripts', function() {
    //this is where our dev JS scripts are
    return gulp.src(_app+'/js/*.js')
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber())
                //this is the filename of the compressed version of our JS
                .pipe(concat('main.js'))
                //where we will store our finalized, compressed script
                .pipe(gulp.dest(_dist+'/js'))
                //notify browserSync to refresh
                .pipe(browserSync.reload({stream: true}));
});

//compiling our Javascripts for deployment
gulp.task('scripts-deploy', function() {
    //this is where our dev JS scripts are
    return gulp.src(_app+'/js/*.js')
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber())
                //this is the filename of the compressed version of our JS
                .pipe(concat('main.js'))
                //compress :D
                .pipe(uglify())
                //where we will store our finalized, compressed script
                .pipe(gulp.dest(_dist+'/js'));
});

//compiling vendor
gulp.task('vendor-scripts', function() {
    //this is where our dev JS scripts are
    return gulp.src(_app+'/js/vendor/**/*.js')
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber())
                //this is the filename of the compressed version of our JS
                //.pipe(concat('vendor.js'))
                //where we will store our finalized, compressed script
                .pipe(gulp.dest(_dist+'/js/vendor'))
                //notify browserSync to refresh
                .pipe(browserSync.reload({stream: true}));
});

//compiling our Javascripts for deployment
gulp.task('vendor-scripts-deploy', function() {
    //this is where our dev JS scripts are
    return gulp.src(_app+'/js/vendor/**/*.js')
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber())
                //this is the filename of the compressed version of our JS
                //.pipe(concat('vendor.js'))
                //compress :D
                //.pipe(uglify())
                //where we will store our finalized, compressed script
                .pipe(gulp.dest(_dist+'/js/vendor'));
});

//compiling our SCSS files
gulp.task('styles', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src(_app+'/scss/main.scss')
                //prevent pipe breaking caused by errors from gulp plugins
                .pipe(plumber({
                  errorHandler: function (err) {
                    console.log(err);
                    this.emit('end');
                  }
                }))
                //get sourceMaps ready
                .pipe(sourceMaps.init())
                //include SCSS and list every "include" folder
                .pipe(sass({
                      errLogToConsole: true,
                      includePaths: [
                          _app+'/scss/'
                      ]
                }))
                .pipe(autoprefixer({
                   browsers: autoPrefixBrowserList,
                   cascade:  true
                }))
                //the final filename of our combined css file
                .pipe(concat('main.css'))
                //get our sources via sourceMaps
                .pipe(sourceMaps.write())
                //where to save our final, compressed css file
                .pipe(gulp.dest(_dist+'/css'))
                //notify browserSync to refresh
                .pipe(browserSync.reload({stream: true}));
});

//basically just keeping an eye on all PHP files
gulp.task('php', function() {
    //watch any and all PHP files and refresh when something changes
    return gulp.src(_app+'/*.php')
    .pipe(plumber())
    //where to save our final, compressed css file
    .pipe(gulp.dest(_dist))
    //notify browserSync to refresh
    .pipe(browserSync.reload({stream: true}));
});

//basically just keeping an eye on all PHP files
gulp.task('html', function() {
    //watch any and all PHP files and refresh when something changes
    return gulp.src(_app+'/*.html')
    .pipe(plumber())
    .pipe(cache('achetemele'))
    //where to save our final, compressed css file
    .pipe(gulp.dest(_dist))
    //notify browserSync to refresh
    .pipe(browserSync.reload({stream: true}));
});

//basically just keeping an eye on all PHP files
gulp.task('html-deploy', function() {
    //watch any and all PHP files and refresh when something changes
    return gulp.src(_app+'/*.html')
    .pipe(plumber())
    //where to save our final, compressed css file
    .pipe(gulp.dest(_dist))
    //notify browserSync to refresh
    .pipe(browserSync.reload({stream: true}));
});

//compiling our SCSS files for deployment
gulp.task('styles-deploy', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src(_app+'/scss/main.scss')
                .pipe(plumber())
                //include SCSS includes folder
                .pipe(sass({
                      includePaths: [
                          _app+'/scss',
                      ]
                }))
                .pipe(autoprefixer({
                  browsers: autoPrefixBrowserList,
                  cascade:  true
                }))
                //the final filename of our combined css file
                .pipe(concat('main.css'))
                .pipe(cleanCSS())
                //where to save our final, compressed css file
                .pipe(gulp.dest(_dist+'/css'));
});

//compiling VENDOR CSS
gulp.task('vendor-styles', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src(_app+'/scss/vendor/**/*.css')
                .pipe(plumber())
                //the final filename of our combined css file
                .pipe(concat('vendor.css'))
                .pipe(cleanCSS())
                //where to save our final, compressed css file
                .pipe(gulp.dest(_dist+'/css'));
});

//compiling VENDOR CSS
gulp.task('vendor-styles-deploy', function() {
    //the initializer / master SCSS file, which will just be a file that imports everything
    return gulp.src(_app+'/scss/vendor/**/*.css')
                .pipe(plumber())
                //the final filename of our combined css file
                .pipe(concat('vendor.css'))
                .pipe(cleanCSS())
                //where to save our final, compressed css file
                .pipe(gulp.dest(_dist+'/css'));
});


//cleans our dist directory in case things got deleted
gulp.task('clean', function() {
    return del([
        _dist+ '/css',
        _dist+ '/images',
        _dist+ '/js'
    ]);
});
//cleans our dist directory in case things got deleted
gulp.task('cleancss', function() {
    return del([
        _dist+ '/css/main.css'
    ]);
});
//create folders using shell
gulp.task('scaffold', function() {
  return shell.task([
      'mkdir '+_dist+ '/images',
      'mkdir '+_dist+ '/js',
      'mkdir '+_dist+ '/css'
    ]
  );
});
//this is the main watcher to use when in active development
//  this will:
//  startup the web server,
//  start up browserSync
//  compress all scripts and SCSS files
gulp.task('watch', ['browserSync', 'scripts', 'vendor-scripts', 'styles', 'vendor-styles', 'php'], function() {
    //a list of watchers, so it will watch all of the following files waiting for changes
    gulp.watch(_app+'/js/vendor/**', ['vendor-scripts']);
    gulp.watch(_app+'/js/*', ['scripts']);
    gulp.watch(_app+'/scss/vendor/**', ['vendor-styles']);
    gulp.watch(_app+'/scss/**', ['styles']);
    gulp.watch(_app+'/images/**', ['images']);
    gulp.watch(_app+'/*.php', ['php']);
    gulp.watch(_app+'/*.html', ['html']);
});
//this is the main watcher to use when in active development
//  this will:
//  startup the web server,
//  start up browserSync
//  compress all scripts and SCSS files
gulp.task('watchcss', ['browserSync', 'styles', 'php'], function() {
    //a list of watchers, so it will watch all of the following files waiting for changes
    gulp.watch(_app+'/scss/**', ['styles']);
    gulp.watch(_app+'/*.php', ['php']);
    gulp.watch(_app+'/*.html', ['html']);
});

//this is our deployment task, it will set everything for deployment-ready files
gulp.task('deploy', gulpSequence('clean', 'scaffold', ['scripts-deploy', 'vendor-scripts', 'html-deploy', 'styles-deploy', 'vendor-styles-deploy', 'images-deploy']));
//this is our deployment task, it will set everything for deployment-ready files
gulp.task('deploycss', gulpSequence('cleancss', 'styles-deploy', 'html-deploy'));

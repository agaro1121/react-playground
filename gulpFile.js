'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect'); // runs a local dev server
const open = require('gulp-open'); // open a URL in a web browser

const browserify = require('browserify'); // Bundles JS
const reactify = require('reactify'); // Transforms React JSX to JS
const source = require('vinyl-source-stream'); // Use conventional text streams with Gulp

const concat = require('gulp-concat');

const lint = require('gulp-eslint'); //lint JS files, including JSX

const config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: 'src/**/*.js',
        images: './src/images/*',
        dist: './dist',
        mainJs: './src/main.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',

        ]
    }
};

gulp.task('connect', () => {
   connect.server({
       root: ['dist'],
       port: config.port,
       base: config.devBaseUrl,
       livereload: true,
   })
});

gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({ uri: `${config.devBaseUrl}:${config.port}/`}));
});

gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', () => {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist+'/css'))
});

gulp.task('images', () => {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist+'/images'))
        .pipe(connect.reload())
});



gulp.task('lint', () => {
    gulp.src(config.paths.js)
        // .pipe(lint({ config: './eslint.config.json' }))
        .pipe(lint())
        .pipe(lint.format());
});

gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'watch']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
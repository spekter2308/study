'use script';

const gulpfile = require('gulp');
const concat = require('gulp-concat');
var sass = require('gulp-sass');

sass.compiler = require('node-sass')

const cssFiles = [
    './src/css/style.scss',
    './src/css/admin_style.scss'
];

function styles() {
    return gulpfile.src(cssFiles)
        //.pipe(concat('finish.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpfile.dest('./public'));
}

function scripts() {
    return;
}

function watch() {
    gulpfile.watch('./src/css/', styles);
}

gulpfile.task('styles', styles);
gulpfile.task('scripts', scripts);
gulpfile.task('watch', watch);
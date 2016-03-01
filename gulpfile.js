'use strict';

const gulp          = require('gulp');
const del           = require('del');
const typescript    = require('typescript');
const transpile     = require('gulp-typescript');
const srcmaps       = require('gulp-sourcemaps');
const lint          = require('gulp-tslint');
const inject        = require('gulp-inject');
const path          = require('path');
const exec          = require('child_process').exec;

const config        = require('./gulp.config')();
const PROJECT       = transpile.createProject('./tsconfig.json', { typescript: typescript });

gulp.task('default', [
    'transpile',
    'copy'
]);

gulp.task('copy', [
    'copy.assets',
    'inject.dependencies'
]);

gulp.task('clean', (done) => {
    del([config.dist]).then(paths => {
        console.log('dist directory successfully deleted:\n\t', paths.join('\n'));
        done();
    });
});

gulp.task('tslint', () => {
    return gulp
        .src(config.allTS)
        .pipe(lint())
        .pipe(lint.report('full'));
});

gulp.task('copy.assets', () => {
    return gulp
        .src([config.allAssets], { 'base' : '.' })
        .pipe(gulp.dest(config.dist));
});

gulp.task('copy.index', () => {
    return gulp
        .src([config.indexHTML])
        .pipe(gulp.dest(config.dist));
});

gulp.task('copy.angular2.dependencies', () => {
    return gulp
        .src(config.angular2, { 'base' : './node_modules' })
        .pipe(gulp.dest(path.join(config.dist, 'node_modules')));
});

gulp.task('copy.materialize.dependencies', () => {
    return gulp
        .src(config.materialize, { 'base' : './node_modules' })
        .pipe(gulp.dest(path.join(config.dist, 'node_modules')));
});

gulp.task('inject.dependencies', ['copy.angular2.dependencies', 'copy.materialize.dependencies', 'copy.index'], () => {
    let angular2 = gulp.src(config.angular2, {read: false});
    let materialize = gulp.src(config.materialize, {read: false});

    return gulp
        .src('./dist/index.html')
        .pipe(inject(materialize, {name: 'materialize'}))
        .pipe(inject(angular2, {name: 'angular2'}))
        .pipe(gulp.dest(config.dist));

});

gulp.task('transpile', () => {
    const outDir = path.join(config.dist, 'app');

    return gulp
        .src([config.allTS])
        .pipe(srcmaps.init())
        .pipe(transpile(PROJECT)).js
        .pipe(srcmaps.write())
        .pipe(gulp.dest(outDir));
});

gulp.task('lite-server', (done) => {
    let childProcess = exec('cd dist && lite-server');

    childProcess.stdout.on('on', data => {
        console.log(data.toString());
        done();
    });

    childProcess.stderr.on('on', err => {
        console.log(err.toString());
        done();
    });
});

gulp.task('serve', ['tslint', 'transpile', 'copy'], () => {
    const allFiles = ['./app/**/*.{ts,html,css}', './index.html'];
    const tasks = ['tslint', 'transpile', 'copy.assets'];

    return gulp.watch(allFiles, tasks);
});
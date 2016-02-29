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
    del([config.transpileDest]).then(paths => {
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
        .pipe(gulp.dest(config.transpileDest));
});

gulp.task('copy.index', () => {
    return gulp
        .src([config.indexHTML])
        .pipe(gulp.dest(config.transpileDest));
});

gulp.task('copy.dependencies', () => {
    return gulp
        .src(config.deps, { 'base' : './node_modules' })
        .pipe(gulp.dest(path.join(config.transpileDest, 'node_modules')));
});

gulp.task('inject.dependencies', ['copy.dependencies', 'copy.index'], () => {
    let target = gulp.src('./dist/index.html');
    let sources = gulp.src(config.deps, { read: false });

    return target
        .pipe(inject(sources))
        .pipe(gulp.dest('./dist'));
});

gulp.task('transpile', () => {
    const outDir = path.join(config.transpileDest, 'app');

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
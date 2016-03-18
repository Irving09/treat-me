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
    'init.dependencies',
    'copy.assets',
    'tslint',
    'transpile'
]);

gulp.task('clean', (done) => {
    del([config.dist]).then(paths => {
        console.log('dist directory successfully deleted:\n\t', paths.join('\n'));
        done();
    });
});

gulp.task('insert.scripts', () => {
    let angularDeps = gulp.src(config.angular2, { read: false });
    let materializeDeps = gulp.src(config.materialize, { read: false });
    
    return gulp
        .src(config.indexHTML)
        .pipe(inject(angularDeps, { name: 'angular2' }))
        .pipe(inject(materializeDeps, { name: 'materialize' }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('copy.dependencies', () => {
    let dependencies = config.angular2.concat(config.materialize);

    return gulp
        .src(dependencies, { base: '.' })
        .pipe(gulp.dest(config.dist));
});

gulp.task('init.dependencies', [
    'copy.dependencies',
    'insert.scripts'
]);

gulp.task('copy.assets', () => {
    return gulp
        .src(config.allAssets, { 'base' : '.' })
        .pipe(gulp.dest(config.dist));
});

gulp.task('tslint', () => {
    return gulp
        .src(config.allTS)
        .pipe(lint())
        .pipe(lint.report('full'))
            .on('error', function() {
                this.emit('end');
            });
});

gulp.task('transpile', () => {
    return gulp
        .src(config.allTS, { base: '.' })
        .pipe(srcmaps.init())
        .pipe(transpile(PROJECT)).js
        .pipe(srcmaps.write())
        .pipe(gulp.dest(config.dist));
});

gulp.task('serve', ['default'], () => {
    const allFiles = [
        config.allTS,
        config.allAssets,
        config.indexHTML
    ];

    const reload = [
        'insert.scripts',
        'copy.dependencies',
        'tslint',
        'transpile',
        'copy.assets'
    ];

    return gulp
        .watch(allFiles, reload);
});
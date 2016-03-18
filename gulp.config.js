module.exports = function() {
    const PATHS = {
        allTS:         './app/**/*.ts',
        allAssets:     './app/**/!(*.ts)',
        indexHTML:     './index.html',
        dist: './dist',
        angular2: [
            './node_modules/es6-shim/es6-shim.min.js',
            './node_modules/systemjs/dist/system-polyfills.js',
            './node_modules/angular2/bundles/angular2-polyfills.js',
            './node_modules/systemjs/dist/system.src.js',
            './node_modules/rxjs/bundles/Rx.js',
            './node_modules/angular2/bundles/angular2.js',
            './system.config.js',
        ],
        materialize: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/materialize-css/bin/materialize.js',
            './node_modules/materialize-css/bin/materialize.css',
            './node_modules/materialize-css/font/**/*.*'
        ]
    };

    return PATHS;
};
module.exports = function() {
    const PATHS = {
        allTS:         './app/**/*.ts',
        allAssets:     './app/**/!(*.ts)',
        indexHTML:     './index.html',
        dist: './dist',
        angular2: [
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',

            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js',

            './system.config.js'
        ]
    };

    return PATHS;
};
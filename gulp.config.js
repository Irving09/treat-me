module.exports = function() {
    const PATHS = {
        allTS:         './app/**/*.ts',
        allAssets:     './app/**/!(*.ts)',
        indexHTML:     './index.html',
        transpileDest: './dist',
        deps: [
            './node_modules/es6-shim/es6-shim.min.js',
            './node_modules/systemjs/dist/system-polyfills.js',
            './node_modules/angular2/bundles/angular2-polyfills.js',
            './node_modules/systemjs/dist/system.src.js',
            './node_modules/rxjs/bundles/Rx.js',
            './node_modules/angular2/bundles/angular2.js',
            './system.config.js'
        ]
    };

    return PATHS;
};
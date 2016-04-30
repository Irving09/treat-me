System.config({
	packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        },
        '@angular2-material/core': {
	        format: 'cjs',
	        defaultExtension: 'js',
	        main: 'core.js',
        },
        '@angular2-material/button': {
            format: 'cjs',
            defaultExtension: 'js',
            main: 'button.js'
        }
	}
});
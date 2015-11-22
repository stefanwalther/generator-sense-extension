'use strict';

var TestSetup = function () {

	this.expected = {

		// Typical root files, regardless the type and other configs.
		rootFiles: [
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.jshintrc',
			'.yo-rc.json',
			'CHANGELOG.yml',
			'LICENSE.md',
			'package.json',
			'README.md'
		],

		// Typical source file, regardless the type and other configs.
		srcFiles: [
			'src',
			'src/my-extension.qext',
			'src/my-extension.js',
			'src/lib/js/extUtils.js',
			'src/properties.js',
			'src/initialproperties.js'
		],

		// Typical project dirs, regardless the type and other configs.
		projectDirs: [
			'build',
			'build/dev',
			'build/release',
			'src',
			'src/lib',
			'src/lib/css',
			'src/lib/external'

		],
		verbFiles: [
				'.verb.md'
		]
	}
};
module.exports = new TestSetup();
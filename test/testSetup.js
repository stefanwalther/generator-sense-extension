'use strict';

var TestSetup = function () {

	this.expected = {
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
		srcFiles: [
			'src',
			'src/my-extension.qext',
			'src/my-extension.js',
			'src/lib/js/extUtils.js',
			'src/properties.js',
			'src/initialproperties.js'
		],
		projectDirs: [
			'build',
			'build/dev',
			'build/release',
			'src',
			'src/lib',
			'src/lib/css',
			'src/lib/external'

		]
	}
};
module.exports = new TestSetup();
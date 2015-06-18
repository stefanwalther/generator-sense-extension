'use strict';
var fs = require('fs');
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var mockery = require('mockery');

describe( 'generator:app', function () {

	before(function () {
		mockery.enable({warnOnUnregistered: false});
	});

	after(function () {
		mockery.disable();
	});

	describe( 'defaults', function () {
		before(function (done) {
			helpers.run(path.join(__dirname, '../app'))
				.withPrompts({
					isAdvanced: false,
					extName: 'my-extension'
				})
				.on('end', done);
		});

		it('creates files', function () {
			var expected = [
				'.yo-rc.json'
			];

			assert.file(expected);
		});

	} );


} );
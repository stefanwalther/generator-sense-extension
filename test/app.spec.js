'use strict';
var fs = require( 'fs' );
var path = require( 'path' );
var assert = require( 'yeoman-generator' ).assert;
var helpers = require( 'yeoman-generator' ).test;
var mockery = require( 'mockery' );

describe( 'generator:app', function () {

	before( function () {
		mockery.enable( {warnOnUnregistered: false} );
	} );

	after( function () {
		mockery.disable();
	} );

	describe( 'handles default settings', function () {
		before( function ( done ) {
			helpers.run( path.join( __dirname, '../app' ) )
				.withPrompts( {
					isAdvanced: false,
					extName: 'my-extension'
				} )
				.on( 'end', done );
		} );

		it( 'creates root files', function () {
			var expected = [
				'.editorconfig',
				'.gitattributes',
				'.jshintrc',
				'.yo-rc.json',
				'CHANGELOG.yml',
				'README.md',
				'LICENSE.md',
				'package.json'
			];

			assert.file( expected );
		} );

	} );

} );

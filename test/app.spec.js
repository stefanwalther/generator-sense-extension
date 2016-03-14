'use strict';

// core dependencies
var fs = require( 'fs' );

// local dependencies
var path = require( 'path' );
var assert = require( 'yeoman-assert' );
var helpers = require( 'yeoman-test' );
var mockery = require( 'mockery' );
var testSetup = require( './testSetup' );

describe.only( 'generator:app', function () {

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
			assert.file( testSetup.expected.rootFiles );
		} );

		it( 'creates basic files should be always there', function () {
			assert.file( testSetup.expected.srcFiles );
		} );

		it( 'creates all required project dirs', function () {
			assert.file( testSetup.expected.projectDirs );
		} );

		//Todo: Not clear how to test non-existance of files.
		it.skip( 'should not contain .verb specific files', function () {
			assert.file( ['.verb.md'] ).to.be.false;
		} )

	} );

} );

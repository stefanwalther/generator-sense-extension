/*global describe, before, after, it*/
'use strict';

// core dependencies
var fs = require( 'fs' );
var path = require( 'path' );

// local dependencies
var assert = require( 'yeoman-assert' );
var helpers = require( 'yeoman-test' );
var mockery = require( 'mockery' );
var testSetup = require( './testSetup' );

describe( 'generator:app', function () {

	before( function ( done ) {
		mockery.enable( {
			warnOnReplace: false,
			warnOnUnregistered: false
		} );
		done();
	} );

	after( function ( done ) {
		mockery.disable();
		done();
	} );

	describe( 'handles default settings', function () {

		before( function () {
			return helpers.run( path.join( __dirname, '../app' ) )
				.withPrompts( {
					isAdvanced: false,
					extName: 'my-extension'
				} )
				.toPromise();
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

		it( 'should not contain .verb specific files', function () {
			assert.noFile( ['.verb.md'] );
		} );

		it('shouldn\'t create some files in the src directory', function() {
			assert.noFile( testSetup.expected.noSrcFiles);
		});

	} );

} );

'use strict';
var fs = require( 'fs' );
var path = require( 'path' );
var assert = require( 'yeoman-generator' ).assert;
var helpers = require( 'yeoman-generator' ).test;
var mockery = require( 'mockery' );
var testSetup = require('./testSetup');

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
			assert.file( testSetup.expected.rootFiles );
		} );

		it( 'creates basic files should be always there', function () {
			assert.file( testSetup.expected.srcFiles );
		} );

		it( 'creates all required project dirs', function (  ) {
			assert.file( testSetup.expected.projectDirs );
		} );

	} );

} );

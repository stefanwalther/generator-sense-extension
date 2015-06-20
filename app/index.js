/*!
 * generator-sense-extension <https://github.com/stefanwalther/generator-sense-extension>
 *
 * Copyright (c) 2015, Stefan Walther.
 * Licensed under the MIT License.
 */

'use strict';

var yeoman = require( 'yeoman-generator' );
var chalk = require( 'chalk' );
var _ = require( 'lodash' );
var moment = require( 'moment' );
var utils = require( './utils' );

module.exports = yeoman.generators.Base.extend( {

	constructor: function () {
		yeoman.generators.Base.apply( this, arguments );
		this.pkg = require( "../package.json" );

	},

	init: {},

	prompting: function () {
		var done = this.async();

		this.log( chalk.magenta( 'You\'re using sense-extension generator. Have fun!' ) );
		this.prompt( require( './prompts.js' ), function ( props ) {

			this.prompts = {};

			this.prompts.extName = props.extName;
			this.prompts.extDescription = props.extDescription;
			this.prompts.extNamespace = props.extNamespace;
			this.prompts.extensionNameSafe = props.extName.replace( /\s/g, "" );
			this.prompts.extensionNamespace = _.isEmpty( props.extNamespace ) ? '' : props.extNamespace + '-';
			this.prompts.extensionDescription = props.extDescription;
			this.prompts.extLic = props.extLic || 'mit';

			var d = new Date();
			this.prompts.publishingYear = d.getFullYear();
			this.prompts.creationDate = moment( d ).format( 'YYYY-MM-DD' );

			done();

		}.bind( this ) );

	},

	writing: function () {

	},

	templates: function () {

	},

	test: function () {

	},

	install: function () {
		console.log('done/install');
		//this.installDependencies( {bower: true, npm: true} )
	},

	saveConfig: function () {
		this.config.set (this.prompts);
		this.config.save();
	}

} );

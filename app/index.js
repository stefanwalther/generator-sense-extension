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
var yoPrompts = require('./prompts.js');

module.exports = yeoman.generators.Base.extend( {

	constructor: function () {
		yeoman.generators.Base.apply( this, arguments );
		this.pkg = require( "../package.json" );

	},

	init: {},

	prompting: function () {
		var done = this.async();

		this.log( chalk.magenta( 'You\'re using sense-extension generator. Have fun!' ) );
		this.prompt( yoPrompts, function ( props ) {

			this.prompts = {};

			this.prompts.extName = props.extName;
			this.prompts.extDescription = props.extDescription;
			this.prompts.extNamespace = props.extNamespace;
			this.prompts.extNameSafe = props.extName.replace( /\s/g, "" );
			this.prompts.extNamespace = _.isEmpty( props.extNamespace ) ? '' : props.extNamespace + '-';
			this.prompts.extDescription = props.extDescription;

			// Advanced, if not used, fallback to default values in prompts definition
			this.prompts.extLic = props.extLic ||  _.findWhere(yoPrompts, {name: 'extLic'} ).default;
			this.prompts.extType = props.extType ||  _.findWhere(yoPrompts, {name: 'extType'} ).default;
			this.prompts.useLess = props.useLess ||  _.findWhere(yoPrompts, {name: 'useLess'} ).default;
			this.prompts.useVerb = props.useVerb ||  _.findWhere(yoPrompts, {name: 'useVerb'} ).default;

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

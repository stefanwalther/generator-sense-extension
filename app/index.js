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
var yoPrompts = require( './prompts.js' );

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

			this.prompts.authorName = '';

			this.prompts.extName = props.extName;
			this.prompts.extDescription = props.extDescription;
			this.prompts.extNamespace = props.extNamespace;
			this.prompts.extAuthor = props.extAuthor;
			this.prompts.extAuthorWebsite = props.extAuthorWebsite;
			this.prompts.extNameSafe = props.extName.replace( /\s/g, "-" );
			this.prompts.extNamespace = _.isEmpty( props.extNamespace ) ? '' : props.extNamespace + '-';
			this.prompts.extUniqueName = this.prompts.extNamespace.toLowerCase() + this.prompts.extNameSafe.toLocaleLowerCase();
			this.prompts.extDescription = props.extDescription;
			this.prompts.extTemplate = props.extTemplate;

			// Advanced, if not used, fallback to default values in prompts definition
			this.prompts.extLic = props.extLic || _.findWhere( yoPrompts, {name: 'extLic'} ).default;
			this.prompts.extType = props.extType || _.findWhere( yoPrompts, {name: 'extType'} ).default;
			this.prompts.useLess = props.useLess || _.findWhere( yoPrompts, {name: 'useLess'} ).default;
			this.prompts.useVerb = props.useVerb || _.findWhere( yoPrompts, {name: 'useVerb'} ).default;
			this.prompts.useSenseGo = props.useSenseGo || _.findWhere( yoPrompts, {name: 'useSenseGo'} ).default;

			var d = new Date();
			this.prompts.publishingYear = d.getFullYear();
			this.prompts.creationDate = moment( d ).format( 'YYYY-MM-DD' );

			this.prompts.licenceGenerated = utils.getLicense( this.prompts );
			this.prompts.installDependencies = props.installDependencies || _.findWhere( yoPrompts, {name: 'installDependencies'} ).default

			done();

		}.bind( this ) );

	},

	writing: function () {

		this._dirs();
		this._root();
		this._src();

	},

	templates: function () {

	},

	test: function () {

	},

	install: function () {
		console.log( 'done/install' );
		//this.installDependencies( {bower: true, npm: true} )
	},

	saveConfig: function () {
		this.config.set( this.prompts );
		this.config.save();
	},
	end: function () {

		if ( !this.options['skip-install'] && this.prompts.installDependencies ) {

			this.installDependencies( {
				bower: false,
				npm: true,
				skipMessage: true
			} );
		}

	},

	// ****************************************************************************************
	// Content generation
	// ****************************************************************************************
	_dirs: function () {
		// Build Dir
		this.mkdir( 'build' );
		this.mkdir( 'build/dev' );
		this.mkdir( 'build/release' );
		this.mkdir( 'src' );
		this.mkdir( 'src/lib' );
		this.mkdir( 'src/lib/css' );
		this.mkdir( 'src/lib/external' );
	},
	_root: function () {

		this.copy( '_common/dotFiles/.jshintrc', '.jshintrc' );
		//this.copy( '_common/dotFiles/.gitattributes', '.gitattributes' );
		this.copy( '_common/dotFiles/.gitignore', '.gitignore' );
		this.template( '_common/_package.json', 'package.json' );

		// Verb
		if ( this.prompts.useVerb ) {
			this.template( '_common/dotFiles/.verb.md', '.verb.md' );
			this.template( '_common/README-verb.md', 'README.md' );
		} else {
			this.template( '_common/README.md', 'README.md' );
		}

		// Sense-Go
		if ( this.prompts.useSenseGo ) {
			this.template( '_common/gulpfile.js', 'gulpfile.js' );
		}

		this.template( '_common/CHANGELOG.yml', 'CHANGELOG.yml' );
		this.template( '_common/LICENSE.md', 'LICENSE.md' );

	},

	_src: function () {
		this.template( '_common/src/extension.qext', 'src/' + this.prompts.extUniqueName + '.qext' );
		this.copy( '_common/dotFiles/.editorconfig', 'src/.editorconfig' );



	}

} );

'use strict';

var yeoman = require( 'yeoman-generator' );
var chalk = require( 'chalk' );
var _ = require( 'lodash' );
var moment = require( 'moment' );
var utils = require( './utils' );
var yoPrompts = require( './prompts.js' );
var fs = require( 'fs' );
var path = require( 'path' );

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
			this.prompts.installDependencies = props.installDependencies || _.findWhere( yoPrompts, {name: 'installDependencies'} ).default;

			done();

		}.bind( this ) );
	},

	writing: function () {

		this._projectDirs();
		this._projectRoot();
		this._src();
		this._opts();

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
	_projectDirs: function () {
		// Build Dir
		this.mkdirp( 'build' );
		this.mkdirp( 'build/dev' );
		this.mkdirp( 'build/release' );
		this.mkdirp( 'src' );
		this.mkdirp( 'src/lib' );
		this.mkdirp( 'src/lib/css' );
		this.mkdirp( 'src/lib/external' );
	},
	_projectRoot: function () {

		this.copy( '_common/dotFiles/.editorconfig', '.editorconfig' );
		this.copy( '_common/dotFiles/.gitattributes', '.gitattributes' );
		this.copy( '_common/dotFiles/.jshintrc', '.jshintrc' );
		this.copy( '_common/dotFiles/.gitignore', '.gitignore' );
		this.template( '_common/_package.json', 'package.json' );

		this.template( '_common/README.md', 'README.md' );

		// Sense-Go
		if ( this.prompts.useSenseGo ) {
			this.template( '_common/gulpfile.js', 'gulpfile.js' );
			this.tempalte( '_common/sense-go.yml', 'sense-go.yml' );
		}

		this.template( '_common/CHANGELOG.yml', 'CHANGELOG.yml' );
		this.template( '_common/LICENSE.md', 'LICENSE.md' );

	},

	/**
	 * Source directory and all its dependencies
	 * @private
	 */
	_src: function () {
		this.template( '_common/src/extension.qext', 'src/' + this.prompts.extUniqueName + '.qext' );

		if ( this.prompts.extTemplate ) {
			switch ( this.prompts.extTemplate ) {
				case 'angular_basic':
					this.template( 'angular_basic/extension.js', 'src/' + this.prompts.extUniqueName + '.js' );
					this.template( 'angular_basic/initialproperties.js', 'src/initialproperties.js' );
					this.template( 'angular_basic/properties.js', 'src/properties.js' );
					this.template( 'angular_basic/template.ng.html', 'src/template.ng.html' );
					break;
				case 'basic_paint':
					this.template( 'basic_paint/extension.js', 'src/' + this.prompts.extUniqueName + '.js' );
					this.template( 'basic_paint/initialproperties.js', 'src/initialproperties.js' );
					this.template( 'basic_paint/properties.js', 'src/properties.js' );
			}
		}

		// CSS
		if ( this.prompts.useLess ) {
			this.template( '_common/src/lib/css/main-less.css', 'src/lib/css/main.css' );
			this._src_less();
		} else {
			this.template( '_common/src/lib/css/.gitkeep', 'src/lib/css/.gitkeep' );
		}

		// JS - Utils
		//Todo: To be replaced with a reference to sense-extension-utils (in case of using sense-go)
		this.copy( '_common/src/lib/js/extUtils.js', 'src/lib/js/extUtils.js' );

	},

	_src_less: function () {
		if ( this.prompts.useLess ) {
			this.template( '_common/src/lib/less/main.less', 'src/lib/less/main.less' );
			this.template( '_common/src/lib/less/variables.less', 'src/lib/less/variables.less' );
		}
	},

	// Several options, overwriting other configs.
	_opts: function (  ) {

		// Verb
		if ( this.prompts.useVerb ) {
			this.template( '_common/dotFiles/.verb.md', '.verb.md' );
			this.template( '_common/README-verb.md', 'README.md' );
		}

	}
} );

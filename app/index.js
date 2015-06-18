/*!
 * generator-sense-extension <https://github.com/stefanwalther/generator-sense-extension>
 *
 * Copyright (c) 2015, Stefan Walther.
 * Licensed under the MIT License.
 */

'use strict';

var yeoman = require( 'yeoman-generator' );
var chalk = require( 'chalk' );

module.exports = yeoman.generators.Base.extend( {

  prompting: function () {
    var done = this.async();

      this.prompt( require('./prompts.js'), function ( props ) {

        console.log('props', props);

      done();

    }.bind( this ) );

  },

  configuring: function (  ) {
    this.config.save()
  },

  writing: function (  ) {

  },

  templates: function (  ) {

  },

  test: function (  ) {

  },

  install: function (  ) {
    this.installDependencies( {bower: true, npm: true})
  }



} );

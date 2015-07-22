'use strict';
var gulp = require('gulp');
var senseGo = require('sense-go');

var userConfig = {
	"packageName": "<%= prompts.extNameSafe %>"
};

senseGo.init( gulp, userConfig,  function (  ) {

});

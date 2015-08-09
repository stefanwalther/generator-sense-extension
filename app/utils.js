'use strict';
var fs = require( 'fs' );

module.exports = {

	/**
	 * Generate a license
	 *
	 * @param options {object} Prompt options
	 * @returns {string} License text
	 */
	getLicense: function ( options ) {

		var license_file = __dirname + '/licenses/' + options.extLic + '.txt';
		var lic_content = fs.readFileSync( license_file, 'utf8' );

		// Make replacements based on the prompts
		var temp_result = lic_content
			.replace( /\[year\]/g, options.publishingYear )
			.replace( /\[fullname\]/g, options.authorName )
			.replace( /\[project\]/g, options.extName );

		// Prefix every line with a > (markdown cite)
		var lineArray = temp_result.split( '\n' );
		var result = [];
		for ( var i = 0; i < lineArray.length; i++ ) {
			result.push( '> ' + lineArray[i] );
		}
		return result.join( '\n' );

	}
};

/*global define*/
define( [
		'./properties',
		'./initialproperties'
	],
	function ( props, initProps ) {
		'use strict';

		return {
			definition: props,
			initialProperties: initProps,
			support: {
				export: false,
				exportData: false,
				snapshot: false
			},
			snapshot: {canTakeSnapshot: true},
			paint: function( $element, layout ) {

			}
		};
	} );

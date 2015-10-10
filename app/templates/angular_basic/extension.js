/*global define*/
define( [
		'text!./template.ng.html'
	],
	function ( ngTemplate ) {
		'use strict';

		return {
			definition: {},
			initialProperties: {},
			snapshot: {canTakeSnapshot: true},
			template: ngTemplate,
			controller: ['$scope', function ( $scope ) {
				$scope.msg = 'Hello AngularJS';
			}]
		};
	} );

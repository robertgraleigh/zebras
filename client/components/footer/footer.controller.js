(function () {

	'use strict';

	angular.module('zebraTestApp')
		.controller('FooterCtrl', function ($scope) {
			// Binds the current year to the view
			$scope.date = new Date();
		});

	// Call the IFFE 
}());
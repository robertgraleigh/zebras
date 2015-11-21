/*
(function (){

'use strict';

angular.module('zebraTestApp')
  .controller('PaymentCtrl', function ($scope, $http, stripe) {
			// Collect the credit card details into a form object
			/* $scope.formInfo = {};
			formInfo.name: $scope.formInfo.name,
			formInfo.email: $scope.formInfo.email,
			formInfo.phone: $scope.formInfo.phone,
			forminfo.number: $scope.forminfo.number,
			
			var card = $scope.formInfo;

			// This is the angular way, not the JQuery way
			$scope.checkCard = function () {
				return stripe.card.createToken($scope.payment.card)
					.then(function (response) {
						console.log('token created for card ending in ', response.card.last4);
						var payment = angular.copy($scope.payment);
						payment.card = void 0;
						payment.token = response.id;
						return $http.post('https://logcamplabs.backand.com/payments', payment);
					}).then(function (payment) {
						console.log('successfully submitted payment for $ ', payment.amount);
					}).catch(function (err) {
						if (err.type && /^Stripe/.test(err.type)) {
							console.log('Stripe error: ', err.message);
						} else {
							console.log('Other error occurred, possibly with your API', error.message);
						}
					});
			};
		});
	// Call the IFFE function
}());
*/

'use strict';

/* controller */

var walletApp = angular.module('walletApp', []);

walletApp.controller('walletCtrl', function ($scope) {

	$scope.date = new Date();

	$scope.currencies = [
		{ 'name': 'BIT', 'icon': 'fa-btc' },
		{ 'name': 'EUR', 'icon': 'fa-eur' },
		{ 'name': 'GBP', 'icon': 'fa-gbp' },
		{ 'name': 'USD', 'icon': 'fa-dollar' },
		{ 'name': 'YEN', 'icon': 'fa-jpy' }
	];

	$scope.walletEntries = [
		{ 'amount': 0 }
	];

	$scope.getEntries = function() {
		return $scope.walletEntries.length;
	};

	$scope.addAmount = function() {
		$scope.walletEntries.push({ amount:$scope.walletAmount });
		$scope.walletAmount = '';
	};

	$scope.minusAmount = function() {
		// check if the new total will be a minus amount
		var walletTotal = $scope.getTotal();
		walletTotal = walletTotal - $scope.walletAmount;
		if (walletTotal < 0) {
			alert('Total cannot be a negative amount');
		} else {
			$scope.walletEntries.push({ amount:-$scope.walletAmount });
			$scope.walletAmount = '';
		}		
	};

	$scope.resetWallet = function() {
		$scope.walletEntries = 	$scope.walletEntries = [{ 'amount': 100 }];
	};

	$scope.getTotal = function() {
		var total = 0;
		for (var i=0; i < $scope.walletEntries.length; i++) {
			total += $scope.walletEntries[i].amount;
		}
		return total;
	};

});
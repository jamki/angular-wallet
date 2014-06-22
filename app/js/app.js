'use strict';

/* Controllers */

var walletApp = angular.module('walletApp', []);

walletApp.controller('walletCtrl', function ($scope) {

	$scope.currencies = [
		{ 'name': 'BIT', 'icon': 'fa-btc' },
		{ 'name': 'EUR', 'icon': 'fa-eur' },
		{ 'name': 'GBP', 'icon': 'fa-gbp' },
		{ 'name': 'USD', 'icon': 'fa-dollar' },
		{ 'name': 'YEN', 'icon': 'fa-jpy' }
	];

	$scope.walletEntries = [
		{ 'amount': 100, remove:false }
	];

	$scope.getEntries = function() {
		return $scope.walletEntries.length;
	};

	$scope.addAmount = function() {
		$scope.walletEntries.push({ amount:$scope.walletAmount, remove:false });
		$scope.walletAmount = '';
	};

	$scope.minusAmount = function() {
		$scope.walletEntries.push({ amount:-$scope.walletAmount, remove:false });
		$scope.walletAmount = '';
	};

	$scope.resetWallet = function() {
		$scope.walletEntries = 	$scope.walletEntries = [{ 'amount': 100, remove:false }];
		// insert a default function
	};

	$scope.getTotal = function() {
		var total = 0;
		for (var i=0; i < $scope.walletEntries.length; i++) {
			total += $scope.walletEntries[i].amount;
		}
		return total;
	};

});
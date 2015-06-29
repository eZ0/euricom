// Initializing our app and passing in dependencies
angular.module("teamApp", []).filter('phoneNumber', function() {
		return function(value) {
			var s = value.toString();
			var newNumber = '+' + s.substring(2, 4) 
					+ ' ' + s.substring(4,7) 
					+ ' ' + s.substring(7,9) 
					+ ' ' + s.substring(9,11)
					+ ' ' + s.substring(11);
			return newNumber;
		};
	})
	.controller("teamController", function teamController($scope, $http){
		$http.get('data/data.json').
			success(function(data, status, headers, config) {
				$scope.members = data;
			}).
			error(function(data, status, headers, config) {
			// log error
			});
	});

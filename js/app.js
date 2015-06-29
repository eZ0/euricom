// Initializing our app and passing in dependencies
angular.module("teamApp", [])
	.controller("teamController", function teamController($scope, $http){
		$http.get('data/data.json').
			success(function(data, status, headers, config) {
				$scope.members = data;
			}).
			error(function(data, status, headers, config) {
			// log error
			});
	});
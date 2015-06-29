// Initializing our app and passing in dependencies
var teamApp = angular.module("teamApp", []);


//custom phone formatting
teamApp.filter('phoneNumber', function() {
	return function(value) {
		var s = value.toString();
		var newNumber = '+' + s.substring(2, 4) 
				+ ' ' + s.substring(4,7) 
				+ ' ' + s.substring(7,9) 
				+ ' ' + s.substring(9,11)
				+ ' ' + s.substring(11);
		return newNumber;
	};
});

// retrieving data from Json file
teamApp.controller("teamController", function getTeam($scope, $http){
	$http.get('data/data.json').
		success(function(data, status, headers, config) {
			$scope.members = data;
		}).
		error(function(data, status, headers, config) {
		// log error
		});
	$scope.sendSMS = function(phone){
		var apikey = 'CIboeuspXb';
		var url = "http://bootcamp-challenge.herokuapp.com/api/send-sms?apiKey="+apikey;
		var smstext = 'Yes, I am ready to do my presentation. You can find my solution at: ksenia.be/euricom';

		this.phone = phone;

		// $http.post(url, {username: 'msdn', password: 'bootcamp', text: smstext, destination: phone).
		// success(function(data, status, headers, config) {
		// //load success message	
		// }).
		// error(function(data, status, headers, config) {
		// // log error
		// });
	}
});

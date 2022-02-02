
var usersApp  =  angular.module('usersApp', []);

usersApp.controller('jsonCtrl', function($scope, $http){
	$http.get('data.json').success(function (data){
        console.log(data);
		$scope.employees = data;   
	});   
});


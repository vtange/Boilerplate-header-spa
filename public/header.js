(function() {
    //start of function
  var app = angular.module('header', []);

app.controller('MainCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.info = {};
	$scope.showLogin = false;
	$scope.toggleLogin = function(){
		$scope.showLogin = !!($scope.showLogin)?false:true;
	}
    $scope.login = function(){
		console.log($scope.info);
		$http.post($window.location.href+"login",$scope.info).success(function(data){
			console.log(data);
			
		}).error(function(err){
			throw err;
		})
		
		
	}
	$scope.logout = function(){
		
	}
}]);//end of controller
  //end of function
})();

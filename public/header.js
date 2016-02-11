(function() {
    //start of function
  var app = angular.module('header', []);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.showLogin = false;
	$scope.toggleLogin = function(){
		$scope.showLogin = !!($scope.showLogin)?false:true;
	}
    $scope.login = function(){
		
	}
	$scope.logout = function(){
		
	}
}]);//end of controller
  //end of function
})();

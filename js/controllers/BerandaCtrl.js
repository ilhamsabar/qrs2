app.controller('BerandaCtrl', function ($scope, $stateParams, DataService) {
    
	$scope.semester = [];

	$scope.querydatasemester = function() {
		DataService.querydatasemester().then(function() {
    		$scope.semester = DataService.getdatasemester();
  		});
    }
  
    $scope.querydatasemester();	

});
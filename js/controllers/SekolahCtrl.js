app.controller('SekolahCtrl', function ($rootScope,$scope, $stateParams, DataService) {
    
	

    $scope.sekolah = []; 
    $scope.tsekolah = $rootScope.sekolahterpilih;

	$scope.querydatasekolah = function() {
		DataService.querydatasekolah().then(function() {
    		$scope.sekolah = DataService.getdatasekolah();
  		});
    }

    $scope.querydatasekolah();	

});
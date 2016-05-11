app.controller('PengawasCtrl', function ($scope, $stateParams, DataService) {
    
    $scope.pengawas = [];

	$scope.querydatapengawas = function() {
		DataService.querydatapengawas().then(function() {
    		$scope.pengawas = DataService.getdatapengawas();
  		});
    }

    $scope.querydatapengawas();	

});